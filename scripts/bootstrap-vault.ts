import { runInit } from "../src/commands/init";
import { resolveProjectPaths } from "../src/utils/paths";

async function main(): Promise<void> {
  const paths = resolveProjectPaths(process.cwd());
  await runInit(paths);
  console.log(`Bootstrapped InkTrace vault at ${paths.vaultDir}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
