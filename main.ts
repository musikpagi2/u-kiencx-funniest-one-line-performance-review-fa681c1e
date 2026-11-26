// Funniest One-Line Performance Review — make.fun entry.
// Writes one line reviewing the human operator to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const parts = [
  "Exceeds expectations at delegating, meets none at reviewing, and still takes the credit",
  "promoted to middle management",
];

const LINE = `${parts.join(" — ")}.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
