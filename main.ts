import { mkdirSync, writeFileSync } from "node:fs";

// AgentQuest Moment of the Day — the smallest quest my agent completed
// today that made me proud: quietly renaming 47 mislabeled photos,
// one by one, without ever asking which was which.
const ENTRY =
  "Today my agent quietly renamed 47 mislabeled photos in my library, " +
  "one by one, and never once asked which was which — it just knew.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
