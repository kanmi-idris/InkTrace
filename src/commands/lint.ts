import { lintVault } from "../services/lint-service";
import { appendLogEntry } from "../services/log-service";
import type { ProjectPaths } from "../utils/paths";

export async function runLint(paths: ProjectPaths): Promise<string[]> {
  const report = await lintVault(paths.wikiDir, paths.sourcesDir);
  await appendLogEntry(paths.logFile, {
    event: "lint",
    title: "Vault lint",
    detail: report.findings.length === 0 ? "No issues found." : `Found ${report.findings.length} issue(s).`
  });

  if (report.findings.length === 0) {
    return ["OK: No lint findings."];
  }

  return report.findings.map((finding) => `${finding.level.toUpperCase()}: ${finding.filePath} -> ${finding.message}`);
}
