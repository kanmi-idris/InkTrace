import path from "node:path";
import { listInboxItems, processInbox } from "../services/inbox-process-service";
import type { ProjectPaths } from "../utils/paths";

export async function runInboxList(paths: ProjectPaths): Promise<string[]> {
  const items = await listInboxItems(paths);
  if (items.length === 0) {
    return ["Inbox is empty."];
  }

  return items.map((item) => {
    const relativePath = path.relative(paths.vaultDir, item.filePath);
    const tags = item.tags.length > 0 ? ` tags=[${item.tags.join(", ")}]` : "";
    return `${item.kind.toUpperCase()}: ${relativePath} | ${item.title}${tags}`;
  });
}

export async function runInboxProcess(paths: ProjectPaths): Promise<string[]> {
  const processed = await processInbox(paths);
  if (processed.length === 0) {
    return ["No inbox items to process."];
  }

  return processed.map((item) => `${path.relative(paths.vaultDir, item.inboxPath)} -> ${item.sourceId}`);
}
