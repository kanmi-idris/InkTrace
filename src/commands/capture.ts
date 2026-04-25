import path from "node:path";
import { captureFile, captureNote, capturePaste } from "../services/inbox-capture-service";
import type { ProjectPaths } from "../utils/paths";

export async function runCapture(
  paths: ProjectPaths,
  mode: string,
  options: { title?: string; tags?: string[]; url?: string; content?: string; path?: string }
): Promise<string[]> {
  switch (mode) {
    case "paste": {
      const filePath = await capturePaste(paths, {
        title: options.title ?? "Pasted Capture",
        tags: options.tags,
        url: options.url,
        content: options.content
      });
      return [`Captured pasted content to ${path.relative(paths.vaultDir, filePath)}`];
    }
    case "note": {
      const filePath = await captureNote(paths, {
        title: options.title ?? "Quick Note",
        tags: options.tags,
        url: options.url,
        content: options.content
      });
      return [`Captured note to ${path.relative(paths.vaultDir, filePath)}`];
    }
    case "file": {
      if (!options.path) {
        throw new Error("Missing required option --path for `capture file`.");
      }
      const result = await captureFile(paths, {
        title: options.title ?? path.basename(options.path),
        tags: options.tags,
        url: options.url,
        filePath: options.path
      });
      return [
        `Captured file to ${path.relative(paths.vaultDir, result.filePath)}`,
        `Metadata sidecar: ${path.relative(paths.vaultDir, result.metadataPath)}`
      ];
    }
    default:
      throw new Error(`Unsupported capture mode: ${mode}`);
  }
}
