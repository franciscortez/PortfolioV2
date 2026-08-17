#!/usr/bin/env node
import { spawn } from "node:child_process";
import fs from "node:fs";

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

function findDirectTest(filePath) {
  const norm = filePath.replace(/\\/g, "/");

  // Direct unit test modified
  if (
    norm.includes("tests/unit/") &&
    (norm.endsWith(".test.ts") || norm.endsWith(".test.tsx"))
  ) {
    return { type: "unit", target: norm };
  }

  // Direct E2E test modified
  if (norm.includes("tests/e2e/") && norm.endsWith(".spec.ts")) {
    return { type: "e2e", target: norm };
  }

  // Map specific data/lib/components to fast unit tests
  const map = {
    "src/data/project.ts": "tests/unit/data/project.test.ts",
    "src/data/portfolio.ts": "tests/unit/data/portfolio.test.ts",
    "src/data/experience.ts": "tests/unit/data/experience.test.ts",
    "src/data/skills.ts": "tests/unit/data/skills.test.ts",
    "src/lib/seo.ts": "tests/unit/lib/seo.test.ts",
    "src/lib/site.ts": "tests/unit/lib/seo.test.ts",
    "src/components/layout/sidebar.tsx":
      "tests/unit/components/sidebar.test.tsx",
    "src/components/layout/mobile-sidebar.tsx":
      "tests/unit/components/sidebar.test.tsx",
    "src/components/ui/toast.tsx": "tests/unit/components/toast.test.tsx",
    "src/components/sections/contact/contact-form-client.tsx":
      "tests/unit/components/contact-form.test.tsx",
    "src/components/sections/contact/contact-form.tsx":
      "tests/unit/components/contact-form.test.tsx",
    "src/components/ui/animated-role.tsx":
      "tests/unit/components/animated-role.test.tsx",
    "src/components/pages/home-page.tsx": "tests/unit/pages/home-page.test.tsx",
  };

  for (const [key, testFile] of Object.entries(map)) {
    if (norm.endsWith(key)) {
      return { type: "unit", target: testFile };
    }
  }

  // If page component
  if (norm.includes("src/components/pages/") || norm.includes("src/app/")) {
    return { type: "unit", target: "tests/unit/pages/pages.test.tsx" };
  }

  // Fallback to related files for any src file
  if (norm.includes("src/")) {
    return { type: "related", target: norm };
  }

  return null;
}

async function runTest(testInfo) {
  return new Promise((resolve) => {
    const isWindows = process.platform === "win32";
    const cmd = isWindows ? "npx.cmd" : "npx";
    let args = [];

    if (testInfo.type === "e2e") {
      args = ["playwright", "test", testInfo.target];
    } else if (testInfo.type === "unit") {
      args = ["vitest", "run", testInfo.target];
    } else if (testInfo.type === "related") {
      args = ["vitest", "related", testInfo.target, "--run"];
    }

    console.error(`[Auto-Tester] Running: ${cmd} ${args.join(" ")}`);
    const child = spawn(cmd, args, {
      shell: isWindows,
      stdio: ["ignore", "inherit", "inherit"],
    });

    child.on("close", (code) => {
      if (code === 0) {
        console.error(`[Auto-Tester] Tests passed for ${testInfo.target}`);
      } else {
        console.error(
          `[Auto-Tester] Tests failed (exit code ${code}) for ${testInfo.target}`
        );
      }
      resolve(code);
    });

    child.on("error", (err) => {
      console.error(`[Auto-Tester] Error running tests:`, err.message);
      resolve(1);
    });
  });
}

async function main() {
  try {
    const rawStdin = await readStdin();
    let filePath = "";

    if (rawStdin) {
      try {
        const payload = JSON.parse(rawStdin);
        filePath = extractTargetFile(payload);
      } catch {
        filePath = rawStdin;
      }
    }

    if (process.argv[2]) {
      filePath = process.argv[2];
    }

    if (filePath && fs.existsSync(filePath)) {
      const testInfo = findDirectTest(filePath);
      if (testInfo) {
        await runTest(testInfo);
      }
    }

    // Always output valid json on stdout for hook runner
    process.stdout.write(JSON.stringify({}) + "\n");
    process.exit(0);
  } catch (err) {
    console.error("[Auto-Tester] Error:", err.message);
    process.stdout.write(JSON.stringify({}) + "\n");
    process.exit(0);
  }
}

main();
