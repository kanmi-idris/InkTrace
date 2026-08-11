import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { parseFrontmatter, renderFrontmatter } from "../src/adapters/frontmatter";
import { extractSummary } from "../src/adapters/markdown";
import { runLint } from "../src/commands/lint";
import { runNewSource } from "../src/commands/new-source";
import { writeTextExclusive } from "../src/adapters/filesystem";
import { importRawSource } from "../src/services/source-import-service";
import { generateSourceId } from "../src/services/source-id-service";
import { formatDate, formatTimestamp } from "../src/utils/date";
import { resolveProjectPaths } from "../src/utils/paths";

const projectRoot = path.resolve(__dirname, "..");

async function makeTempDir(prefix: string): Promise<string> {
  return fs.mkdtemp(path.join("/tmp", `${prefix}-`));
}

test("frontmatter supports quoted values and block arrays", () => {
  const input = [
    "---",
    'title: "React: The Good Parts"',
    "source_ids:",
    "  - src-2026-08-09-001",
    "  - src-2026-08-09-002",
    "---",
    "",
    "# Body",
    ""
  ].join("\n");

  const parsed = parseFrontmatter(input);
  assert.equal(parsed.attributes.title, "React: The Good Parts");
  assert.deepEqual(parsed.attributes.source_ids, ["src-2026-08-09-001", "src-2026-08-09-002"]);
  assert.equal(parsed.body, "\n# Body\n");

  const rendered = renderFrontmatter({
    title: "React: The Good Parts",
    tags: ["mobile", "research"],
    status: "active"
  });
  assert.match(rendered, /title: "React: The Good Parts"/);
  assert.deepEqual(parseFrontmatter(`${rendered}\n`).attributes.tags, ["mobile", "research"]);
});

test("summary extraction handles blank lines and alternate section headings", () => {
  assert.equal(
    extractSummary("# Page\n\n## Summary\n\nA useful summary.\n\n## Evidence\n"),
    "A useful summary."
  );
  assert.equal(
    extractSummary("# Entity\n\n## Who or What\n\nThis is the entity description.\n\n## Related\n"),
    "This is the entity description."
  );
});

test("date formatting uses the configured Lagos timezone", () => {
  const previous = process.env.INKTRACE_TIMEZONE;
  process.env.INKTRACE_TIMEZONE = "Africa/Lagos";
  try {
    const date = new Date("2026-08-09T00:30:00+01:00");
    assert.equal(formatDate(date), "2026-08-09");
    assert.equal(formatTimestamp(date), "2026-08-09 00:30");
  } finally {
    if (previous === undefined) delete process.env.INKTRACE_TIMEZONE;
    else process.env.INKTRACE_TIMEZONE = previous;
  }
});

test("vault environment configuration overrides the project default", () => {
  const previous = process.env.INKTRACE_VAULT_PATH;
  process.env.INKTRACE_VAULT_PATH = "/tmp/inktrace-test-vault";
  try {
    const paths = resolveProjectPaths("/tmp/outside-project");
    assert.equal(paths.vaultDir, "/tmp/inktrace-test-vault");
    assert.equal(paths.templateDir, path.join(projectRoot, "templates"));
  } finally {
    if (previous === undefined) delete process.env.INKTRACE_VAULT_PATH;
    else process.env.INKTRACE_VAULT_PATH = previous;
  }
});

test("exclusive writes preserve same-name captures", async () => {
  const directory = await makeTempDir("inktrace-exclusive");
  const first = await writeTextExclusive(path.join(directory, "capture.md"), "first");
  const second = await writeTextExclusive(path.join(directory, "capture.md"), "second");
  assert.notEqual(first, second);
  assert.equal(await fs.readFile(first, "utf8"), "first");
  assert.equal(await fs.readFile(second, "utf8"), "second");
});

test("raw imports preserve duplicate titles", async () => {
  const rawDir = await makeTempDir("inktrace-raw");
  const first = await importRawSource({
    rawDir,
    type: "article",
    title: "Same title",
    sourceId: "src-2026-08-09-001"
  });
  const second = await importRawSource({
    rawDir,
    type: "article",
    title: "Same title",
    sourceId: "src-2026-08-09-002"
  });
  assert.notEqual(first, second);
  assert.match(await fs.readFile(first, "utf8"), /src-2026-08-09-001/);
  assert.match(await fs.readFile(second, "utf8"), /src-2026-08-09-002/);
});

test("source IDs use the highest existing number", async () => {
  const sourcesDir = await makeTempDir("inktrace-ids");
  await fs.writeFile(path.join(sourcesDir, "src-2026-08-09-001.md"), "");
  await fs.writeFile(path.join(sourcesDir, "src-2026-08-09-003.md"), "");
  assert.equal(
    await generateSourceId(sourcesDir, new Date("2026-08-09T12:00:00Z")),
    "src-2026-08-09-004"
  );
});

test("parallel new-source calls receive separate IDs and raw files", async () => {
  const vaultDir = await makeTempDir("inktrace-source");
  const paths = resolveProjectPaths(projectRoot, vaultDir);
  const results = await Promise.all([
    runNewSource(paths, { type: "article", title: "Concurrent title" }),
    runNewSource(paths, { type: "article", title: "Concurrent title" })
  ]);

  assert.notEqual(results[0].id, results[1].id);
  assert.notEqual(results[0].rawPath, results[1].rawPath);
  await Promise.all(results.map((result) => fs.access(result.recordPath)));
  await Promise.all(results.map((result) => fs.access(result.rawPath)));
});

test("lint reports source-path errors", async () => {
  const vaultDir = await makeTempDir("inktrace-lint");
  const paths = resolveProjectPaths(projectRoot, vaultDir);
  await fs.mkdir(path.join(paths.wikiDir, "topics"), { recursive: true });
  await fs.mkdir(paths.sourcesDir, { recursive: true });
  await fs.writeFile(
    path.join(paths.wikiDir, "bad.md"),
    "---\nid: bad\ntype: topic\nstatus: active\nupdated_at: 2026-08-09\n---\n\n# Bad\n\n[src-2026-08-09-001]\n"
  );
  await fs.writeFile(
    path.join(paths.sourcesDir, "src-2026-08-09-001.md"),
    "---\nid: src-2026-08-09-001\nsource_path: raw/missing.md\n---\n"
  );

  const result = await runLint(paths);
  assert.equal(result.hasErrors, true);
  assert.ok(result.lines.some((line) => line.includes("Missing raw source file")));
});

