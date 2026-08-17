#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import prettier from "prettier";

const SUPPORTED_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".jsx",
  ".json",
  ".css",
  ".scss",
  ".md",
  ".mjs",
  ".cjs",
  ".yaml",
  ".yml",
  ".html",
]);

const IGNORED_DIRS = [
  "node_modules",
  ".next",
  "out",
  "dist",
  "build",
  "public",
  ".git",
];

async function readStdin() {
  return new Promise((resolve) => {
    let data = "";
    process.stdin.setEncoding("utf-8");

    if (process.stdin.isTTY) {
      resolve("");
      return;
    }

    process.stdin.on("data", (chunk) => {
      data += chunk;
    });

    process.stdin.on("end", () => {
      resolve(data.trim());
    });

    process.stdin.on("error", () => {
      resolve("");
    });
  });
}

function extractFilePath(payload) {
  if (!payload || typeof payload !== "object") return null;

  // Antigravity payload schemas
  if (payload.toolCall?.args?.TargetFile)
    return payload.toolCall.args.TargetFile;
  if (payload.toolCall?.args?.targetFile)
    return payload.toolCall.args.targetFile;
  if (payload.toolCall?.args?.target_file)
    return payload.toolCall.args.target_file;
  if (payload.targetFile) return payload.targetFile;
  if (payload.target_file) return payload.target_file;

  // Claude Code / Codex payload schemas
  if (payload.tool_input?.file_path) return payload.tool_input.file_path;
  if (payload.tool_input?.path) return payload.tool_input.path;
  if (payload.tool_input?.filePath) return payload.tool_input.filePath;
  if (payload.tool_input?.targetFile) return payload.tool_input.targetFile;

  if (payload.toolCall?.args?.file_path) return payload.toolCall.args.file_path;
  if (payload.toolCall?.args?.path) return payload.toolCall.args.path;
  if (payload.filePath) return payload.filePath;

  return null;
}

function extractFilePathFromText(text) {
  if (!text || typeof text !== "string") return null;

  // Try parsing JSON first
  try {
    const parsed = JSON.parse(text);
    const fromJson = extractFilePath(parsed);
    if (fromJson) return fromJson;
  } catch {
    // Attempt regex extraction for common JSON key patterns if parsing failed due to shell escaping
    const match =
      text.match(/"TargetFile"\s*:\s*"([^"]+)"/i) ||
      text.match(/"file_path"\s*:\s*"([^"]+)"/i) ||
      text.match(/"path"\s*:\s*"([^"]+)"/i) ||
      text.match(/"targetFile"\s*:\s*"([^"]+)"/i);

    if (match && match[1]) {
      return match[1].replace(/\\\\/g, "\\");
    }
  }

  // If string does not look like JSON, treat as direct path
  if (!text.startsWith("{") && !text.startsWith("[") && text.length < 1024) {
    return text.trim();
  }

  return null;
}

function shouldFormatFile(filePath) {
  if (!filePath) return false;
  const ext = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_EXTENSIONS.has(ext)) return false;

  const normalized = path.normalize(filePath);
  for (const dir of IGNORED_DIRS) {
    if (
      normalized.includes(`${path.sep}${dir}${path.sep}`) ||
      normalized.startsWith(`${dir}${path.sep}`) ||
      normalized === dir
    ) {
      return false;
    }
  }

  return true;
}

async function formatFile(filePath) {
  const resolvedPath = path.isAbsolute(filePath)
    ? filePath
    : path.resolve(process.cwd(), filePath);

  try {
    const stat = await fs.stat(resolvedPath);
    if (!stat.isFile()) return;

    if (!shouldFormatFile(resolvedPath)) return;

    const source = await fs.readFile(resolvedPath, "utf-8");
    const options = (await prettier.resolveConfig(resolvedPath)) || {};
    options.filepath = resolvedPath;

    // Explicit parser fallback for mjs / cjs files
    if (
      (resolvedPath.endsWith(".mjs") || resolvedPath.endsWith(".cjs")) &&
      !options.parser
    ) {
      options.parser = "babel";
    }

    const formatted = await prettier.format(source, options);
    if (formatted !== source) {
      await fs.writeFile(resolvedPath, formatted, "utf-8");
    }
  } catch (err) {
    // Non-blocking warning on stderr
    console.error(`[format-hook] Skipped ${filePath}:`, err.message);
  }
}

async function main() {
  try {
    const rawStdin = await readStdin();
    const targetPaths = [];

    if (process.argv[2]) {
      targetPaths.push(process.argv[2]);
    }

    if (rawStdin) {
      const extracted = extractFilePathFromText(rawStdin);
      if (extracted) {
        targetPaths.push(extracted);
      }
    }

    for (const filePath of targetPaths) {
      await formatFile(filePath);
    }
  } catch (err) {
    console.error("[format-hook] Error:", err.message);
  } finally {
    // Agent lifecycle PostToolUse contract expects empty JSON object on stdout
    process.stdout.write("{}\n");
    process.exit(0);
  }
}

main();
