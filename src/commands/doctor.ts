import { exists } from "../adapters/filesystem";
import type { ProjectPaths } from "../utils/paths";

export async function runDoctor(paths: ProjectPaths): Promise<string[]> {
  const checks: Array<[string, string]> = [
    ["Template directory", paths.templateDir],
    ["Vault directory", paths.vaultDir],
    ["Inbox directory", paths.inboxDir],
    ["Index file", paths.indexFile],
    ["Log file", paths.logFile],
    ["System AGENTS file", `${paths.systemDir}/AGENTS.md`]
  ];

  const report: string[] = [];
  for (const [label, targetPath] of checks) {
    const ok = await exists(targetPath);
    report.push(`${ok ? "OK" : "MISSING"}: ${label} -> ${targetPath}`);
  }
  return report;
}

export function doctorHasProblems(report: string[]): boolean {
  return report.some((line) => line.startsWith("MISSING:"));
}
