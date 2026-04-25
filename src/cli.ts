#!/usr/bin/env node
import path from "node:path";
import { runCapture } from "./commands/capture";
import { runDoctor } from "./commands/doctor";
import { runIngestInbox } from "./commands/ingest";
import { runInit } from "./commands/init";
import { runInboxList, runInboxProcess } from "./commands/inbox";
import { runLint } from "./commands/lint";
import { runLog } from "./commands/log";
import { runNewSource } from "./commands/new-source";
import { runRebuildIndex } from "./commands/rebuild-index";
import { info, success } from "./utils/output";
import { resolveProjectPaths } from "./utils/paths";

interface ParsedArgs {
  command?: string;
  subcommand?: string;
  options: Record<string, string | boolean>;
}

async function main(): Promise<void> {
  const parsed = parseArgs(process.argv.slice(2));
  const rootDir = process.cwd();
  const vaultOverride = typeof parsed.options.vault === "string" ? parsed.options.vault : undefined;
  const paths = resolveProjectPaths(rootDir, vaultOverride);

  switch (parsed.command) {
    case "init": {
      await runInit(paths);
      success(`Initialized InkTrace vault at ${paths.vaultDir}`);
      return;
    }
    case "doctor": {
      const report = await runDoctor(paths);
      report.forEach((line) => info(line));
      return;
    }
    case "capture": {
      if (!parsed.subcommand) {
        throw new Error("Missing capture mode. Use `capture paste`, `capture note`, or `capture file`.");
      }
      const tags = typeof parsed.options.tags === "string"
        ? parsed.options.tags.split(",").map((item) => item.trim()).filter(Boolean)
        : [];
      const lines = await runCapture(paths, parsed.subcommand, {
        title: asOptionalString(parsed.options.title),
        tags,
        url: asOptionalString(parsed.options.url),
        content: asOptionalString(parsed.options.content),
        path: asOptionalString(parsed.options.path)
      });
      lines.forEach((line) => success(line));
      return;
    }
    case "inbox": {
      switch (parsed.subcommand) {
        case "list": {
          const lines = await runInboxList(paths);
          lines.forEach((line) => info(line));
          return;
        }
        case "process": {
          const lines = await runInboxProcess(paths);
          lines.forEach((line) => info(line));
          return;
        }
        default:
          throw new Error("Missing inbox action. Use `inbox list` or `inbox process`.");
      }
    }
    case "ingest": {
      switch (parsed.subcommand) {
        case "inbox": {
          const lines = await runIngestInbox(paths);
          lines.forEach((line) => info(line));
          return;
        }
        default:
          throw new Error("Missing ingest action. Use `ingest inbox`.");
      }
    }
    case "new-source": {
      const type = requireOption(parsed.options, "type");
      const title = requireOption(parsed.options, "title");
      const tags = typeof parsed.options.tags === "string"
        ? parsed.options.tags.split(",").map((item) => item.trim()).filter(Boolean)
        : [];

      const result = await runNewSource(paths, {
        type,
        title,
        url: asOptionalString(parsed.options.url),
        author: asOptionalString(parsed.options.author),
        tags,
        file: asOptionalString(parsed.options.file)
      });

      success(`Created source ${result.id}`);
      info(`Raw file: ${path.relative(rootDir, result.rawPath)}`);
      info(`Source record: ${path.relative(rootDir, result.recordPath)}`);
      return;
    }
    case "log": {
      await runLog(
        paths,
        requireOption(parsed.options, "event"),
        requireOption(parsed.options, "title"),
        requireOption(parsed.options, "detail")
      );
      success("Appended log entry.");
      return;
    }
    case "rebuild-index": {
      await runRebuildIndex(paths);
      success("Rebuilt index.");
      return;
    }
    case "lint": {
      const lines = await runLint(paths);
      lines.forEach((line) => info(line));
      return;
    }
    default:
      printHelp();
  }
}

function parseArgs(argv: string[]): ParsedArgs {
  const [command, maybeSubcommand, ...remaining] = argv;
  const hasSubcommand = Boolean(maybeSubcommand && !maybeSubcommand.startsWith("--"));
  const subcommand = hasSubcommand ? maybeSubcommand : undefined;
  const rest = hasSubcommand ? remaining : argv.slice(1);
  const options: Record<string, string | boolean> = {};

  for (let index = 0; index < rest.length; index += 1) {
    const current = rest[index];
    if (!current.startsWith("--")) {
      continue;
    }

    const key = current.slice(2);
    const next = rest[index + 1];
    if (!next || next.startsWith("--")) {
      options[key] = true;
      continue;
    }

    options[key] = next;
    index += 1;
  }

  return { command, subcommand, options };
}

function requireOption(options: Record<string, string | boolean>, key: string): string {
  const value = options[key];
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  throw new Error(`Missing required option --${key}`);
}

function asOptionalString(value: string | boolean | undefined): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function printHelp(): void {
  console.log(`InkTrace CLI

Usage:
  inktrace init [--vault PATH]
  inktrace doctor [--vault PATH]
  inktrace capture paste --title TITLE [--tags a,b] [--url URL] [--content TEXT] [--vault PATH]
  inktrace capture note --title TITLE [--tags a,b] [--url URL] [--content TEXT] [--vault PATH]
  inktrace capture file --path FILE [--title TITLE] [--tags a,b] [--url URL] [--vault PATH]
  inktrace inbox list [--vault PATH]
  inktrace inbox process [--vault PATH]
  inktrace ingest inbox [--vault PATH]
  inktrace new-source --type TYPE --title TITLE [--url URL] [--author NAME] [--tags a,b] [--file PATH] [--vault PATH]
  inktrace log --event EVENT --title TITLE --detail TEXT [--vault PATH]
  inktrace rebuild-index [--vault PATH]
  inktrace lint [--vault PATH]
`);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`ERROR: ${message}`);
  process.exitCode = 1;
});
