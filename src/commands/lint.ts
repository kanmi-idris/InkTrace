import { lintVault } from "../services/lint-service";
import { appendLogEntry } from "../services/log-service";
import type { ProjectPaths } from "../utils/paths";

export interface LintCommandResult {
  lines: string[];
  hasErrors: boolean;
}

export async function runLint(paths: ProjectPaths): Promise<LintCommandResult> {
  const report = await lintVault(paths.wikiDir, paths.sourcesDir, paths.vaultDir);
  await appendLogEntry(paths.logFile, {
    event: "lint",
    title: "Vault lint",
    detail: report.findings.length === 0 ? "No issues found." : `Found ${report.findings.length} issue(s).`
  });

  if (report.findings.length === 0) {
    return { lines: ["OK: No lint findings."], hasErrors: false };
  }

  return {
    lines: report.findings.map((finding) => `${finding.level.toUpperCase()}: ${finding.filePath} -> ${finding.message}`),
    hasErrors: report.findings.some((finding) => finding.level === "error")
  };
}
