import path from "node:path";
import { copyFileExclusive, writeTextExclusive } from "../adapters/filesystem";
import { rawSubdirForType } from "../utils/paths";
import { slugify } from "../utils/slug";
import { formatDate } from "../utils/date";

interface ImportSourceOptions {
  rawDir: string;
  type: string;
  title: string;
  sourceId: string;
  inputFile?: string;
  url?: string;
}

export async function importRawSource(options: ImportSourceOptions): Promise<string> {
  const directory = rawSubdirForType(options.rawDir, options.type);
  const date = formatDate();
  const slug = slugify(options.title);

  if (options.inputFile) {
    const extension = path.extname(options.inputFile) || ".md";
    const requestedPath = path.join(directory, `${date}-${slug}${extension}`);
    return copyFileExclusive(path.resolve(options.inputFile), requestedPath);
  }

  const requestedPath = path.join(directory, `${date}-${slug}.md`);
  const body = [
    `# ${options.title}`,
    "",
    `Source ID: ${options.sourceId}`,
    options.url ? `Original URL: ${options.url}` : "Original URL: ",
    "",
    "Add the clipped content or transcript here."
  ].join("\n");
  return writeTextExclusive(requestedPath, body);
}
