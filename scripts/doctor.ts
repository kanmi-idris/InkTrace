import { runDoctor } from "../src/commands/doctor";
import { resolveProjectPaths } from "../src/utils/paths";

async function main(): Promise<void> {
  const paths = resolveProjectPaths(process.cwd());
  const report = await runDoctor(paths);
  report.forEach((line) => console.log(line));
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
