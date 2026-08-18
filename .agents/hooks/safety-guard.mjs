#!/usr/bin/env node
import path from "node:path";

const BLOCKED_PATTERNS = [
  {
    regex:
      /\bgit\s+(add|commit).*(?<!\.example)\.env(\.local|\.production|\.development)?\b/i,
    reason: "Staging or committing .env files with secrets is blocked.",
  },
  {
    regex: /\bgit\s+reset\s+--hard\b/i,
    reason:
      "Destructive 'git reset --hard' is blocked to prevent accidental data loss.",
  },
  {
    regex: /\bgit\s+clean\s+-[a-zA-Z]*f/i,
    reason:
      "Destructive 'git clean -f' is blocked to prevent deleting untracked files.",
  },
  {
    regex: /\brm\s+-[a-zA-Z]*r[a-zA-Z]*f\s+(\/|~|\.|\*)\b/i,
    reason: "Recursive root/wildcard file deletion is blocked.",
  },
  {
    regex: /\b(format\s+[c-z]:|mkfs|dd\s+if=)/i,
    reason: "Destructive disk formatting command is blocked.",
  },
  {
    regex:
      /\b(npm\s+(i|install|add|uninstall|rm|remove|update)\s+[\w@/.-]+|yarn\s+(add|remove)|pnpm\s+(add|remove))\b/i,
    reason: "Modifying package.json dependencies via AI command is blocked.",
  },
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

function extractTargetFile(payload) {
  if (!payload || typeof payload !== "object") return "";

  if (payload.toolCall?.args?.TargetFile)
    return payload.toolCall.args.TargetFile;
  if (payload.toolCall?.args?.targetFile)
    return payload.toolCall.args.targetFile;
  if (payload.tool_input?.file_path) return payload.tool_input.file_path;
  if (payload.tool_input?.path) return payload.tool_input.path;
  if (payload.targetFile) return payload.targetFile;

  return "";
}

function extractCommand(payload) {
  if (!payload || typeof payload !== "object") return "";

  if (payload.toolCall?.args?.CommandLine)
    return payload.toolCall.args.CommandLine;
  if (payload.toolCall?.args?.command) return payload.toolCall.args.command;
  if (payload.tool_input?.command) return payload.tool_input.command;
  if (payload.tool_input?.cmd) return payload.tool_input.cmd;
  if (payload.command) return payload.command;

  return "";
}

function isPackageJsonBlocked(targetPath) {
  if (!targetPath) return false;
  const basename = path.basename(targetPath).toLowerCase();
  return basename === "package.json" || basename === "package-lock.json";
}

async function main() {
  try {
    const rawStdin = await readStdin();
    let command = "";
    let targetFile = "";
    let isAntigravity = false;

    if (rawStdin) {
      try {
        const payload = JSON.parse(rawStdin);
        command = extractCommand(payload);
        targetFile = extractTargetFile(payload);
        if (payload.conversationId || payload.toolCall) {
          isAntigravity = true;
        }
      } catch {
        command = rawStdin;
      }
    }

    if (process.argv[2]) {
      command = process.argv.slice(2).join(" ");
    }

    // Check direct file modification on package.json
    if (targetFile && isPackageJsonBlocked(targetFile)) {
      const reason =
        "Direct modification of package.json is blocked by AI safety guardrail.";
      if (isAntigravity) {
        process.stdout.write(
          JSON.stringify({ decision: "deny", reason }) + "\n"
        );
        process.exit(0);
      } else {
        console.error(`[AI Safety Guard] BLOCKED: ${reason}`);
        process.stdout.write(
          JSON.stringify({ decision: "deny", reason }) + "\n"
        );
        process.exit(2);
      }
    }

    // Check shell commands against safety rules
    if (command) {
      for (const rule of BLOCKED_PATTERNS) {
        const isBlocked = rule.check
          ? rule.check(command)
          : rule.regex.test(command);
        if (isBlocked) {
          if (isAntigravity) {
            process.stdout.write(
              JSON.stringify({
                decision: "deny",
                reason: rule.reason,
              }) + "\n"
            );
            process.exit(0);
          } else {
            console.error(`[AI Safety Guard] BLOCKED: ${rule.reason}`);
            process.stdout.write(
              JSON.stringify({
                decision: "deny",
                reason: rule.reason,
              }) + "\n"
            );
            process.exit(2);
          }
        }
      }
    }

    // Allow by default
    process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
    process.exit(0);
  } catch (err) {
    console.error("[safety-guard] Error:", err.message);
    process.stdout.write(JSON.stringify({ decision: "allow" }) + "\n");
    process.exit(0);
  }
}

main();
