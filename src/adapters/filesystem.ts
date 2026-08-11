import fs from "node:fs/promises";
import path from "node:path";

export async function ensureDir(dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true });
}

export async function exists(targetPath: string): Promise<boolean> {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

export async function readText(filePath: string): Promise<string> {
  return fs.readFile(filePath, "utf8");
}

export async function writeText(filePath: string, content: string): Promise<void> {
  await ensureDir(path.dirname(filePath));
  await fs.writeFile(filePath, content, "utf8");
}

export async function writeTextNoClobber(filePath: string, content: string): Promise<void> {
  await ensureDir(path.dirname(filePath));
  const handle = await fs.open(filePath, "wx");
  try {
    await handle.writeFile(content, "utf8");
  } catch (error) {
    await fs.unlink(filePath).catch(() => undefined);
    throw error;
  } finally {
    await handle.close();
  }
}

export async function writeTextExclusive(filePath: string, content: string): Promise<string> {
  await ensureDir(path.dirname(filePath));

  for (let index = 0; index < 10_000; index += 1) {
    const candidatePath = withCollisionSuffix(filePath, index);
    let handle: Awaited<ReturnType<typeof fs.open>> | undefined;

    try {
      handle = await fs.open(candidatePath, "wx");
      await handle.writeFile(content, "utf8");
      return candidatePath;
    } catch (error) {
      if (handle) {
        await fs.unlink(candidatePath).catch(() => undefined);
      }
      if (isAlreadyExistsError(error)) {
        continue;
      }
      throw error;
    } finally {
      await handle?.close();
    }
  }

  throw new Error(`Could not create a unique file name for ${filePath}`);
}

export async function writeTextIfMissing(filePath: string, content: string): Promise<void> {
  if (!(await exists(filePath))) {
    await writeText(filePath, content);
  }
}

export async function copyFile(sourcePath: string, destinationPath: string): Promise<void> {
  await ensureDir(path.dirname(destinationPath));
  await fs.copyFile(sourcePath, destinationPath);
}

export async function copyFileExclusive(sourcePath: string, destinationPath: string): Promise<string> {
  await ensureDir(path.dirname(destinationPath));

  for (let index = 0; index < 10_000; index += 1) {
    const candidatePath = withCollisionSuffix(destinationPath, index);
    try {
      await fs.copyFile(sourcePath, candidatePath, fs.constants.COPYFILE_EXCL);
      return candidatePath;
    } catch (error) {
      if (isAlreadyExistsError(error)) {
        continue;
      }
      throw error;
    }
  }

  throw new Error(`Could not create a unique file name for ${destinationPath}`);
}

export async function moveFile(sourcePath: string, destinationPath: string): Promise<void> {
  await ensureDir(path.dirname(destinationPath));
  await fs.rename(sourcePath, destinationPath);
}

export async function moveFileExclusive(sourcePath: string, destinationPath: string): Promise<string> {
  await ensureDir(path.dirname(destinationPath));

  for (let index = 0; index < 10_000; index += 1) {
    const candidatePath = withCollisionSuffix(destinationPath, index);
    try {
      await fs.link(sourcePath, candidatePath);
      await fs.unlink(sourcePath);
      return candidatePath;
    } catch (error) {
      if (isAlreadyExistsError(error)) {
        continue;
      }
      throw error;
    }
  }

  throw new Error(`Could not create a unique file name for ${destinationPath}`);
}

export async function listFileEntries(dirPath: string): Promise<Array<{ path: string; name: string; isDirectory: boolean; isFile: boolean }>> {
  if (!(await exists(dirPath))) {
    return [];
  }

  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  return entries.map((entry) => ({
    path: path.join(dirPath, entry.name),
    name: entry.name,
    isDirectory: entry.isDirectory(),
    isFile: entry.isFile()
  }));
}

export async function listMarkdownFilesRecursive(dirPath: string): Promise<string[]> {
  if (!(await exists(dirPath))) {
    return [];
  }

  const results: string[] = [];
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await listMarkdownFilesRecursive(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      results.push(fullPath);
    }
  }

  return results.sort();
}

export async function copyDirectory(sourceDir: string, destinationDir: string): Promise<void> {
  await ensureDir(destinationDir);
  const entries = await fs.readdir(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destinationPath = path.join(destinationDir, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(sourcePath, destinationPath);
    } else {
      await copyFile(sourcePath, destinationPath);
    }
  }
}

function withCollisionSuffix(filePath: string, index: number): string {
  if (index === 0) {
    return filePath;
  }

  const extension = path.extname(filePath);
  const stem = extension ? filePath.slice(0, -extension.length) : filePath;
  return `${stem}-${index + 1}${extension}`;
}

function isAlreadyExistsError(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === "EEXIST";
}
