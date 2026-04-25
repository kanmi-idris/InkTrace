import { runInboxProcess } from "./inbox";
import { runRebuildIndex } from "./rebuild-index";
import { runLint } from "./lint";
import type { ProjectPaths } from "../utils/paths";

export async function runIngestInbox(paths: ProjectPaths): Promise<string[]> {
  const output: string[] = [];

  output.push("STEP 1: Processing inbox items...");
  const processed = await runInboxProcess(paths);
  processed.forEach((line) => output.push(line));

  output.push("", "STEP 2: Rebuilding index...");
  await runRebuildIndex(paths);
  output.push("Rebuilt index.");

  output.push("", "STEP 3: Running lint...");
  const lintLines = await runLint(paths);
  lintLines.forEach((line) => output.push(line));

  return output;
}
