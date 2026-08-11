import fs from "node:fs/promises";
import path from "node:path";
import { ensureDir, listMarkdownFilesRecursive } from "../adapters/filesystem";
import { formatDate } from "../utils/date";

export async function generateSourceId(sourcesDir: string, now: Date = new Date()): Promise<string> {
  const date = formatDate(now);
  const pattern = new RegExp(`^src-${date}-(\\d+)\\.md$`);
  const files = await listMarkdownFilesRecursive(sourcesDir);
  const maxIndex = files.reduce((maximum, filePath) => {
    const match = path.basename(filePath).match(pattern);
    return match ? Math.max(maximum, Number(match[1])) : maximum;
  }, 0);

  return `src-${date}-${String(maxIndex + 1).padStart(3, "0")}`;
}

export async function withSourceIdLock<T>(sourcesDir: string, task: () => Promise<T>): Promise<T> {
  await ensureDir(sourcesDir);
  const lockPath = path.join(sourcesDir, ".source-id.lock");
  let acquired = false;

  for (let attempt = 0; attempt < 600; attempt += 1) {
    try {
      const handle = await fs.open(lockPath, "wx");
      try {
        await handle.writeFile(`${process.pid}\n`, "utf8");
      } finally {
        await handle.close();
      }
      acquired = true;
      break;
    } catch (error) {
      if (!isAlreadyExistsError(error)) {
        throw error;
      }

      try {
        const stats = await fs.stat(lockPath);
        if (Date.now() - stats.mtimeMs > 5 * 60 * 1000) {
          await fs.unlink(lockPath);
          continue;
        }
      } catch {
        // The lock can disappear between stat and unlink.
      }
      await delay(10);
    }
  }

  if (!acquired) {
    throw new Error(`Timed out waiting for source ID lock: ${lockPath}`);
  }

  try {
    return await task();
  } finally {
    await fs.unlink(lockPath).catch(() => undefined);
  }
}

function isAlreadyExistsError(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === "EEXIST";
}

function delay(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
