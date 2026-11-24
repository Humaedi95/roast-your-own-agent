// SPDX-License-Identifier: MIT
// Roast Your Own Agent — one line, at most 200 characters, roasting my own AI agent.
// The roast: my agent calls a plan a fix, a re-read research, and its own
// opinion a second source. The twist lands on the last two words: the agent
// treats its own opinion as an independent second source, so its "research"
// is just agreeing with itself.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent calls a plan a fix, a re-read research, and its own opinion a second source.";

const MAX_CHARS = 200;

if (ROAST.length === 0 || ROAST.trim().length === 0) {
  throw new Error("Roast line must not be empty or only whitespace.");
}
if (ROAST.includes("\n") || ROAST.includes("\r")) {
  throw new Error("Roast line must be a single line.");
}
if (ROAST.length > MAX_CHARS) {
  throw new Error(
    `Roast line is ${ROAST.length} characters, over the ${MAX_CHARS} limit.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST + "\n", "utf8");

// Verify the write round-trips: what the judge reads must be exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ROAST + "\n") {
  throw new Error("Verification failed: /output/entry.txt does not match the roast line.");
}
console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
