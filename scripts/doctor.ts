import { doctorHasProblems, runDoctor } from "../src/commands/doctor";
import { resolveProjectPaths } from "../src/utils/paths";

async function main(): Promise<void> {
  const paths = resolveProjectPaths(process.cwd());
  const report = await runDoctor(paths);
  report.forEach((line) => console.log(line));
  if (doctorHasProblems(report)) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
