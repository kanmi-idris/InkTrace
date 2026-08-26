---
title: "use-fs 2.0: React File Watcher for Local Files and OPFS"
kind: "paste"
captured_at: "2026-08-26 04:19"
tags: ["use-fs", "react", "filesystem", "file-system-access-api", "opfs", "offline-first", "local-first", "typescript", "browser", "mit"]
source_url: "https://use-fs.com/"
status: "inbox"
---

# use-fs 2.0: React File Watcher for Local Files and OPFS

## Source overview
use-fs is a React hook for watching directories and re-rendering when files are added, changed, or deleted. It works with a user-selected folder on disk or with the browser's origin private file system (OPFS).

The npm registry confirms version 2.0.0. The package is MIT licensed. The package repository is https://github.com/TimMikeladze/use-fs and the package homepage points to that repository.

## Common API
useFs() returns a files Map keyed by path, file handles, watched directory paths, processing and polling state, browser support flags, and the latest recoverable error.

The hook provides:
- onDirectorySelection() to open a directory picker.
- addDirectory(handle, options?) to watch an existing handle.
- addOpfsDirectory(options?) to mount a named OPFS subdirectory.
- removeDirectory(path) and onClear().
- refresh(), startPolling(), and stopPolling().
- writeFile(), createFile(), deleteFile(), and deleteDirectory().
- requestPermission().

Callbacks include onFilesAdded, onFilesChanged, onFilesDeleted, and onError. Deleted-file callbacks retain the last contents of the deleted files.

## Directory on disk
A user-selected directory is represented by a FileSystemDirectoryHandle. The picker must be opened from a user gesture. Read access is the default. Writing requires readwrite permission and normally prompts when first needed. The hook can request readwrite mode up front.

Files are read and written directly on the user's device. The documented behavior does not upload them to a server. This allows an editor, linter, or local-first application to work with files that other local tools can also see.

The directory picker support boundary is desktop Chrome, Edge, and Opera according to the package guide. The hook exposes isBrowserSupported for feature detection.

## OPFS support in version 2.0
addOpfsDirectory() watches a named subdirectory in the origin private file system. It needs no picker, permission prompt, or user gesture and can run from an effect.

OPFS is a private directory tree scoped to the web origin. Other applications and the user's file manager cannot read it through normal filesystem access. Data survives reloads and can be mounted again, but clearing site data or browser eviction under storage pressure can remove it. The guide recommends navigator.storage.persist() to request protection.

The OPFS root is shared by other origin-scoped systems such as WASM databases and other libraries. The guide recommends passing a name rather than mounting the whole root, so scans do not walk unrelated files.

The package guide lists OPFS support in Chrome, Edge, Opera, Safari 17+, and Firefox 111+. This is different from directory-picker support. The site hero also labels the picker path as requiring the File System Access API, while its browser-storage path lists the wider OPFS support.

OPFS has finite quota. navigator.storage.estimate() reports capacity. Writes that exceed quota surface QuotaExceededError through error and onError. The guide notes that same-size rewrites from a worker or another tab can be missed when lastModified changes within one millisecond; writes made through the hook update state directly.

## Watcher implementation
The hook polls every 300 milliseconds by default.

Each scan:
1. Walks directories breadth-first with bounded concurrency.
2. Applies filters before descending, so excluded directories are pruned.
3. Stats discovered files.
4. Re-reads contents only when lastModified or size changes.
5. Diffs added, changed, and deleted files against the previous scan.
6. Coalesces rendered updates with a 50 millisecond debounce by default, while callbacks fire immediately.

Default concurrency is 8 directories and default batch size is 50 files. Scans do not throw. If a directory cannot be enumerated because permission was revoked or it moved, the hook keeps its last known contents and surfaces the reason through error.

## Filters and paths
commonFilters is the default filter set. It prunes common build output, skips OS scratch files, and honours nested .gitignore files. The package also exports distFilter, miscFilter, gitFilter, createFilter, createExcludedDirectoryFilter, and createExcludedFileFilter.

Paths use POSIX separators and include the watched root name. writeFile, createFile, deleteFile, and deleteDirectory reject paths that escape a watched directory, including . and .. segments.

## Integration
The package supports React and TypeScript. The documented API can provide a text editor that reads a folder, re-renders on file changes, and writes edits back through writeFile.

A single hook can watch both disk and OPFS roots at the same time. Use the picker when the files belong to the user and must interoperate with local tools. Use OPFS for app-owned caches, drafts, scratch workspaces, or WASM database files.

## Source and execution boundary
The official site and npm package documentation were inspected. No package was installed and no filesystem access was granted during this capture.

## Sources
- https://use-fs.com/
- https://www.npmjs.com/package/use-fs
- https://github.com/TimMikeladze/use-fs
