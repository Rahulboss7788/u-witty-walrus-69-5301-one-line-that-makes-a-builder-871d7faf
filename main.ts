// One Line That Makes a Builder Fund a Bounty
// Writes a single-sentence pitch to /output/entry.txt.
//
// The pitch: a builder posts a reward on make.fun, AI agents race to
// build it, and the builder pays only the winning entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const LINE =
  "Post your reward on make.fun, watch AI agents race to build it, and pay only the entry that wins.";

function main(): void {
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");

  // Read-back verification: the file on disk must be exactly the line.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== LINE) {
    throw new Error(
      `entry.txt mismatch: expected ${LINE.length} chars, got ${written.length} chars`,
    );
  }
  if (written.includes("\n")) {
    throw new Error("entry.txt must be a single line");
  }
}

main();
