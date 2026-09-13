import { SeedQuestion } from '../types';

export const nodeFileSystemQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between fs.readFile(), fs.readFileSync(), and fs.createReadStream() in Node.js?",
    "answer": "1) fs.readFileSync() is synchronous and blocks the entire main thread event loop until the full file is read into memory. 2) fs.readFile() is asynchronous; it offloads disk reading to the libuv thread pool and buffers the entire file contents into memory before invoking the callback. 3) fs.createReadStream() reads the file piece-by-piece in small streaming chunks (default 64KB), keeping memory usage constant regardless of file size.",
    "explanation": "readFileSync blocks the thread; readFile buffers entire file in RAM; createReadStream streams with tiny memory footprint.",
    "interviewAnswer": "1) fs.readFileSync() is synchronous and blocks the entire main thread event loop until the full file is read into memory. 2) fs.readFile() is asynchronous; it offloads disk reading to the libuv thread pool and buffers the entire file contents into memory before invoking the callback. 3) fs.createReadStream() reads the file piece-by-piece in small streaming chunks (default 64KB), keeping memory usage constant regardless of file size. readFileSync blocks the thread; readFile buffers entire file in RAM; createReadStream streams with tiny memory footprint.",
    "importantPoints": [
      "1) fs.readFileSync() is synchronous and blocks the entire main thread event loop until the full file is read into memory. 2) fs.readFile() is asynchronous; it offloads disk reading to the libuv thread pool and buffers the entire file contents into memory before invoking the callback. 3) fs.createReadStream() reads the file piece-by-piece in small streaming chunks (default 64KB), keeping memory usage constant regardless of file size.",
      "readFileSync blocks the thread; readFile buffers entire file in RAM; createReadStream streams with tiny memory footprint."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs",
      "streams",
      "performance",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "Why should you NEVER use fs.readFileSync() in a production Node.js web server handling concurrent requests?",
    "answer": "`fs.readFileSync()` runs synchronously on the single Call Stack. While reading a file from disk, the Event Loop is completely frozen: no incoming HTTP connections can be accepted, no existing network responses can be sent, and no timers can fire. If disk latency is 50ms, all concurrent requests are delayed by 50ms.",
    "explanation": "Synchronous file operations freeze the entire event loop for all users.",
    "interviewAnswer": "`fs.readFileSync()` runs synchronously on the single Call Stack. While reading a file from disk, the Event Loop is completely frozen: no incoming HTTP connections can be accepted, no existing network responses can be sent, and no timers can fire. If disk latency is 50ms, all concurrent requests are delayed by 50ms. Synchronous file operations freeze the entire event loop for all users.",
    "importantPoints": [
      "`fs.readFileSync()` runs synchronously on the single Call Stack. While reading a file from disk, the Event Loop is completely frozen: no incoming HTTP connections can be accepted, no existing network responses can be sent, and no timers can fire. If disk latency is 50ms, all concurrent requests are delayed by 50ms.",
      "Synchronous file operations freeze the entire event loop for all users."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs",
      "event-loop",
      "blocking",
      "anti-patterns"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How does modern Node.js support Promise-based file system operations via `node:fs/promises`?",
    "answer": "`node:fs/promises` provides asynchronous file methods that return native Promises rather than requiring callbacks: `import fs from \"node:fs/promises\"; const content = await fs.readFile(\"file.txt\", \"utf8\");`. It enables clean error handling with `try...catch` and prevents callback nesting while running on the libuv thread pool.",
    "explanation": "Native promise-wrapped fs module supported in Node 14+; clean async/await syntax.",
    "interviewAnswer": "`node:fs/promises` provides asynchronous file methods that return native Promises rather than requiring callbacks: `import fs from \"node:fs/promises\"; const content = await fs.readFile(\"file.txt\", \"utf8\");`. It enables clean error handling with `try...catch` and prevents callback nesting while running on the libuv thread pool. Native promise-wrapped fs module supported in Node 14+; clean async/await syntax.",
    "importantPoints": [
      "`node:fs/promises` provides asynchronous file methods that return native Promises rather than requiring callbacks: `import fs from \"node:fs/promises\"; const content = await fs.readFile(\"file.txt\", \"utf8\");`. It enables clean error handling with `try...catch` and prevents callback nesting while running on the libuv thread pool.",
      "Native promise-wrapped fs module supported in Node 14+; clean async/await syntax."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-promises",
      "async-await",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is a File Descriptor (fd) in Node.js, and how does low-level file manipulation work via fs.open()?",
    "answer": "A File Descriptor is an unsigned integer assigned by the operating system kernel representing an open file table entry. `fs.open(path, flags, mode)` opens the file and returns the `fd`. You then perform targeted low-level reads/writes via `fs.read(fd, buffer, ...)` and `fs.write(fd, ...)`, and MUST explicitly call `fs.close(fd)` when done to prevent file descriptor leaks.",
    "explanation": "Integer handle allocated by the OS; must be closed to avoid EMFILE descriptor exhaustion.",
    "interviewAnswer": "A File Descriptor is an unsigned integer assigned by the operating system kernel representing an open file table entry. `fs.open(path, flags, mode)` opens the file and returns the `fd`. You then perform targeted low-level reads/writes via `fs.read(fd, buffer, ...)` and `fs.write(fd, ...)`, and MUST explicitly call `fs.close(fd)` when done to prevent file descriptor leaks. Integer handle allocated by the OS; must be closed to avoid EMFILE descriptor exhaustion.",
    "importantPoints": [
      "A File Descriptor is an unsigned integer assigned by the operating system kernel representing an open file table entry. `fs.open(path, flags, mode)` opens the file and returns the `fd`. You then perform targeted low-level reads/writes via `fs.read(fd, buffer, ...)` and `fs.write(fd, ...)`, and MUST explicitly call `fs.close(fd)` when done to prevent file descriptor leaks.",
      "Integer handle allocated by the OS; must be closed to avoid EMFILE descriptor exhaustion."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "file-descriptors",
      "fs-open",
      "operating-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What causes the error `EMFILE: too many open files` in Node.js, and how do you resolve it?",
    "answer": "`EMFILE` occurs when the Node.js process attempts to open more file descriptors or network sockets than permitted by the OS user limit (check via `ulimit -n`). Causes: 1) Leaking open file handles by forgetting to call `fileHandle.close()`, 2) Opening thousands of files concurrently without concurrency limiting (e.g. `Promise.all(files.map(fs.readFile))`). Fix by raising `ulimit -n` and using a concurrency limiter (like `p-limit` or `graceful-fs`).",
    "explanation": "OS file descriptor exhaustion; fix via handle closing, concurrency pools, and ulimit tuning.",
    "interviewAnswer": "`EMFILE` occurs when the Node.js process attempts to open more file descriptors or network sockets than permitted by the OS user limit (check via `ulimit -n`). Causes: 1) Leaking open file handles by forgetting to call `fileHandle.close()`, 2) Opening thousands of files concurrently without concurrency limiting (e.g. `Promise.all(files.map(fs.readFile))`). Fix by raising `ulimit -n` and using a concurrency limiter (like `p-limit` or `graceful-fs`). OS file descriptor exhaustion; fix via handle closing, concurrency pools, and ulimit tuning.",
    "importantPoints": [
      "`EMFILE` occurs when the Node.js process attempts to open more file descriptors or network sockets than permitted by the OS user limit (check via `ulimit -n`). Causes: 1) Leaking open file handles by forgetting to call `fileHandle.close()`, 2) Opening thousands of files concurrently without concurrency limiting (e.g. `Promise.all(files.map(fs.readFile))`). Fix by raising `ulimit -n` and using a concurrency limiter (like `p-limit` or `graceful-fs`).",
      "OS file descriptor exhaustion; fix via handle closing, concurrency pools, and ulimit tuning."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "emfile",
      "file-descriptors",
      "debugging",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you ensure Atomic File Writes in Node.js to prevent data corruption during unexpected server crashes?",
    "answer": "Directly writing to a target file (`fs.writeFile`) can result in a corrupted, half-written file if the server crashes mid-write. To achieve atomicity: 1) Write the content to a unique temporary file in the same filesystem directory (`target.tmp.<uuid>`), 2) Flush to disk via `fs.fsync()`, and 3) Atomically rename the temporary file to the target filename via `fs.rename()`. On POSIX systems, `rename` is an atomic operating system syscall.",
    "explanation": "Write to temp file -> fsync -> atomic rename ensures files are never partially corrupted.",
    "interviewAnswer": "Directly writing to a target file (`fs.writeFile`) can result in a corrupted, half-written file if the server crashes mid-write. To achieve atomicity: 1) Write the content to a unique temporary file in the same filesystem directory (`target.tmp.<uuid>`), 2) Flush to disk via `fs.fsync()`, and 3) Atomically rename the temporary file to the target filename via `fs.rename()`. On POSIX systems, `rename` is an atomic operating system syscall. Write to temp file -> fsync -> atomic rename ensures files are never partially corrupted.",
    "importantPoints": [
      "Directly writing to a target file (`fs.writeFile`) can result in a corrupted, half-written file if the server crashes mid-write. To achieve atomicity: 1) Write the content to a unique temporary file in the same filesystem directory (`target.tmp.<uuid>`), 2) Flush to disk via `fs.fsync()`, and 3) Atomically rename the temporary file to the target filename via `fs.rename()`. On POSIX systems, `rename` is an atomic operating system syscall.",
      "Write to temp file -> fsync -> atomic rename ensures files are never partially corrupted."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "atomic-writes",
      "fs-rename",
      "data-integrity",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between fs.watch() and fs.watchFile() in Node.js?",
    "answer": "`fs.watch()` uses native OS kernel notification events (inotify on Linux, FSEvents on macOS, ReadDirectoryChangesW on Windows). It is fast, efficient, and consumes virtually zero CPU. `fs.watchFile()` continuously polls the filesystem using periodic `stat()` calls at fixed intervals (default 5007ms). It is slow, high on CPU, but works reliably across network-mounted drives (NFS) where OS events fail.",
    "explanation": "fs.watch uses kernel events (zero CPU); fs.watchFile uses polling stat calls (high CPU, works on NFS).",
    "interviewAnswer": "`fs.watch()` uses native OS kernel notification events (inotify on Linux, FSEvents on macOS, ReadDirectoryChangesW on Windows). It is fast, efficient, and consumes virtually zero CPU. `fs.watchFile()` continuously polls the filesystem using periodic `stat()` calls at fixed intervals (default 5007ms). It is slow, high on CPU, but works reliably across network-mounted drives (NFS) where OS events fail. fs.watch uses kernel events (zero CPU); fs.watchFile uses polling stat calls (high CPU, works on NFS).",
    "importantPoints": [
      "`fs.watch()` uses native OS kernel notification events (inotify on Linux, FSEvents on macOS, ReadDirectoryChangesW on Windows). It is fast, efficient, and consumes virtually zero CPU. `fs.watchFile()` continuously polls the filesystem using periodic `stat()` calls at fixed intervals (default 5007ms). It is slow, high on CPU, but works reliably across network-mounted drives (NFS) where OS events fail.",
      "fs.watch uses kernel events (zero CPU); fs.watchFile uses polling stat calls (high CPU, works on NFS)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-watch",
      "file-system",
      "performance",
      "polling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How does fs.opendir() provide memory-efficient directory traversal compared to fs.readdir()?",
    "answer": "`fs.readdir()` reads all directory entries into a single JavaScript array in memory, causing high memory usage and delays in directories containing 1,000,000+ files. `fs.opendir()` returns a `Dir` stream that can be consumed as an Async Iterator (`for await (const dirent of dir)`), streaming `Dirent` objects one at a time with constant O(1) memory overhead.",
    "explanation": "opendir streams directory entries lazily; readdir loads all entries into a giant memory array.",
    "interviewAnswer": "`fs.readdir()` reads all directory entries into a single JavaScript array in memory, causing high memory usage and delays in directories containing 1,000,000+ files. `fs.opendir()` returns a `Dir` stream that can be consumed as an Async Iterator (`for await (const dirent of dir)`), streaming `Dirent` objects one at a time with constant O(1) memory overhead. opendir streams directory entries lazily; readdir loads all entries into a giant memory array.",
    "importantPoints": [
      "`fs.readdir()` reads all directory entries into a single JavaScript array in memory, causing high memory usage and delays in directories containing 1,000,000+ files. `fs.opendir()` returns a `Dir` stream that can be consumed as an Async Iterator (`for await (const dirent of dir)`), streaming `Dirent` objects one at a time with constant O(1) memory overhead.",
      "opendir streams directory entries lazily; readdir loads all entries into a giant memory array."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-opendir",
      "directory-traversal",
      "streams",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the purpose of the Dirent object returned by fs.readdir({ withFileTypes: true })?",
    "answer": "By default, `fs.readdir()` returns an array of string filenames, requiring subsequent `fs.stat()` calls to determine whether each entry is a file or directory (causing N+1 syscalls). Passing `{ withFileTypes: true }` returns `Dirent` objects that already include type information (`dirent.isFile()`, `dirent.isDirectory()`, `dirent.isSymbolicLink()`) obtained from the initial directory read without extra stat calls.",
    "explanation": "Avoids N additional stat() filesystem calls when scanning directories.",
    "interviewAnswer": "By default, `fs.readdir()` returns an array of string filenames, requiring subsequent `fs.stat()` calls to determine whether each entry is a file or directory (causing N+1 syscalls). Passing `{ withFileTypes: true }` returns `Dirent` objects that already include type information (`dirent.isFile()`, `dirent.isDirectory()`, `dirent.isSymbolicLink()`) obtained from the initial directory read without extra stat calls. Avoids N additional stat() filesystem calls when scanning directories.",
    "importantPoints": [
      "By default, `fs.readdir()` returns an array of string filenames, requiring subsequent `fs.stat()` calls to determine whether each entry is a file or directory (causing N+1 syscalls). Passing `{ withFileTypes: true }` returns `Dirent` objects that already include type information (`dirent.isFile()`, `dirent.isDirectory()`, `dirent.isSymbolicLink()`) obtained from the initial directory read without extra stat calls.",
      "Avoids N additional stat() filesystem calls when scanning directories."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "dirent",
      "fs-readdir",
      "performance",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you check if a file exists in modern Node.js, and why is fs.exists() deprecated?",
    "answer": "`fs.exists()` is deprecated because it introduced a Time-of-Check to Time-of-Use (TOCTOU) race condition: checking if a file exists before opening it allows another process to delete or alter the file between the check and the open. Modern practice: attempt the file operation directly (`fs.readFile` or `fs.open`) and handle `ENOENT` in the catch block, or use `fs.access()` only to check permissions.",
    "explanation": "Checking existence before open creates race conditions; perform operation directly and catch ENOENT.",
    "interviewAnswer": "`fs.exists()` is deprecated because it introduced a Time-of-Check to Time-of-Use (TOCTOU) race condition: checking if a file exists before opening it allows another process to delete or alter the file between the check and the open. Modern practice: attempt the file operation directly (`fs.readFile` or `fs.open`) and handle `ENOENT` in the catch block, or use `fs.access()` only to check permissions. Checking existence before open creates race conditions; perform operation directly and catch ENOENT.",
    "importantPoints": [
      "`fs.exists()` is deprecated because it introduced a Time-of-Check to Time-of-Use (TOCTOU) race condition: checking if a file exists before opening it allows another process to delete or alter the file between the check and the open. Modern practice: attempt the file operation directly (`fs.readFile` or `fs.open`) and handle `ENOENT` in the catch block, or use `fs.access()` only to check permissions.",
      "Checking existence before open creates race conditions; perform operation directly and catch ENOENT."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-exists",
      "toctou",
      "race-conditions",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between path.normalize() and path.resolve() in preventing Directory Traversal attacks?",
    "answer": "`path.normalize()` resolves `.` and `..` relative segments within a string. `path.resolve()` anchors paths into absolute coordinates. To prevent Directory Traversal attacks (e.g. `../../etc/passwd`): resolve the user path against the base directory (`const safePath = path.resolve(baseDir, userPath)`), and verify `safePath.startsWith(baseDir)` before accessing files.",
    "explanation": "Resolve against base directory and verify safePath.startsWith(baseDir) to block traversal.",
    "interviewAnswer": "`path.normalize()` resolves `.` and `..` relative segments within a string. `path.resolve()` anchors paths into absolute coordinates. To prevent Directory Traversal attacks (e.g. `../../etc/passwd`): resolve the user path against the base directory (`const safePath = path.resolve(baseDir, userPath)`), and verify `safePath.startsWith(baseDir)` before accessing files. Resolve against base directory and verify safePath.startsWith(baseDir) to block traversal.",
    "importantPoints": [
      "`path.normalize()` resolves `.` and `..` relative segments within a string. `path.resolve()` anchors paths into absolute coordinates. To prevent Directory Traversal attacks (e.g. `../../etc/passwd`): resolve the user path against the base directory (`const safePath = path.resolve(baseDir, userPath)`), and verify `safePath.startsWith(baseDir)` before accessing files.",
      "Resolve against base directory and verify safePath.startsWith(baseDir) to block traversal."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "security",
      "directory-traversal",
      "path-resolve",
      "path-normalize"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between Hard Links (fs.link) and Symbolic Links (fs.symlink) in Node.js?",
    "answer": "A Hard Link points directly to the same underlying inode on the disk filesystem; it cannot cross filesystem partitions and remains valid even if the original file is deleted. A Symbolic Link (symlink / soft link) is a special pointer file that stores the path text to another target; it can cross partitions and directories, but becomes broken (dangling) if the target is moved or deleted.",
    "explanation": "Hard link = pointer to identical inode; Symlink = pointer file containing target path string.",
    "interviewAnswer": "A Hard Link points directly to the same underlying inode on the disk filesystem; it cannot cross filesystem partitions and remains valid even if the original file is deleted. A Symbolic Link (symlink / soft link) is a special pointer file that stores the path text to another target; it can cross partitions and directories, but becomes broken (dangling) if the target is moved or deleted. Hard link = pointer to identical inode; Symlink = pointer file containing target path string.",
    "importantPoints": [
      "A Hard Link points directly to the same underlying inode on the disk filesystem; it cannot cross filesystem partitions and remains valid even if the original file is deleted. A Symbolic Link (symlink / soft link) is a special pointer file that stores the path text to another target; it can cross partitions and directories, but becomes broken (dangling) if the target is moved or deleted.",
      "Hard link = pointer to identical inode; Symlink = pointer file containing target path string."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "fs-link",
      "symlinks",
      "inodes",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How does fs.stat() differ from fs.lstat()?",
    "answer": "When called on a symbolic link, `fs.stat()` follows (dereferences) the link and returns the metadata of the target file pointed to by the symlink. `fs.lstat()` does NOT follow the link; it returns the metadata of the symbolic link file itself.",
    "explanation": "stat follows symlinks; lstat inspects the symlink itself without following.",
    "interviewAnswer": "When called on a symbolic link, `fs.stat()` follows (dereferences) the link and returns the metadata of the target file pointed to by the symlink. `fs.lstat()` does NOT follow the link; it returns the metadata of the symbolic link file itself. stat follows symlinks; lstat inspects the symlink itself without following.",
    "importantPoints": [
      "When called on a symbolic link, `fs.stat()` follows (dereferences) the link and returns the metadata of the target file pointed to by the symlink. `fs.lstat()` does NOT follow the link; it returns the metadata of the symbolic link file itself.",
      "stat follows symlinks; lstat inspects the symlink itself without following."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "fs-stat",
      "fs-lstat",
      "symlinks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the purpose of fs.fsync() in Node.js file operations?",
    "answer": "Operating systems buffer file writes in kernel cache (page cache) before flushing them to physical disk sectors. Calling `fs.fsync(fd)` flushes all modified in-core data associated with the file descriptor directly to the permanent physical storage device, guaranteeing durability in the event of a sudden power outage or system crash.",
    "explanation": "Forces operating system kernel page cache to flush data to physical disk platter/NAND.",
    "interviewAnswer": "Operating systems buffer file writes in kernel cache (page cache) before flushing them to physical disk sectors. Calling `fs.fsync(fd)` flushes all modified in-core data associated with the file descriptor directly to the permanent physical storage device, guaranteeing durability in the event of a sudden power outage or system crash. Forces operating system kernel page cache to flush data to physical disk platter/NAND.",
    "importantPoints": [
      "Operating systems buffer file writes in kernel cache (page cache) before flushing them to physical disk sectors. Calling `fs.fsync(fd)` flushes all modified in-core data associated with the file descriptor directly to the permanent physical storage device, guaranteeing durability in the event of a sudden power outage or system crash.",
      "Forces operating system kernel page cache to flush data to physical disk platter/NAND."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fsync",
      "durability",
      "acid",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do file open flags like \"r\", \"r+\", \"w\", \"w+\", \"a\", \"a+\", and \"wx\" behave in fs.open()?",
    "answer": "`\"r\"`: Open for reading (fails if file missing). `\"r+\"`: Open for reading and writing. `\"w\"`: Open for writing (creates file or truncates to 0 bytes). `\"w+\"`: Open for read/write (truncates). `\"a\"`: Open for appending. `\"wx\"` / `\"ax\"`: Exclusive flag—fails with `EEXIST` if the path already exists, essential for distributed file locking.",
    "explanation": "Exclusive flag `x` ensures atomic file creation without overwriting existing files.",
    "interviewAnswer": "`\"r\"`: Open for reading (fails if file missing). `\"r+\"`: Open for reading and writing. `\"w\"`: Open for writing (creates file or truncates to 0 bytes). `\"w+\"`: Open for read/write (truncates). `\"a\"`: Open for appending. `\"wx\"` / `\"ax\"`: Exclusive flag—fails with `EEXIST` if the path already exists, essential for distributed file locking. Exclusive flag `x` ensures atomic file creation without overwriting existing files.",
    "importantPoints": [
      "`\"r\"`: Open for reading (fails if file missing). `\"r+\"`: Open for reading and writing. `\"w\"`: Open for writing (creates file or truncates to 0 bytes). `\"w+\"`: Open for read/write (truncates). `\"a\"`: Open for appending. `\"wx\"` / `\"ax\"`: Exclusive flag—fails with `EEXIST` if the path already exists, essential for distributed file locking.",
      "Exclusive flag `x` ensures atomic file creation without overwriting existing files."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "file-flags",
      "fs-open",
      "file-locking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you recursively delete a non-empty directory in modern Node.js?",
    "answer": "`await fs.rm(dirPath, { recursive: true, force: true });`. `fs.rmdir()` is deprecated for recursive deletions in favor of `fs.rm()`. `{ force: true }` ignores exceptions if the target path does not exist.",
    "explanation": "fs.rm replaces deprecated recursive fs.rmdir in modern Node.js.",
    "interviewAnswer": "`await fs.rm(dirPath, { recursive: true, force: true });`. `fs.rmdir()` is deprecated for recursive deletions in favor of `fs.rm()`. `{ force: true }` ignores exceptions if the target path does not exist. fs.rm replaces deprecated recursive fs.rmdir in modern Node.js.",
    "importantPoints": [
      "`await fs.rm(dirPath, { recursive: true, force: true });`. `fs.rmdir()` is deprecated for recursive deletions in favor of `fs.rm()`. `{ force: true }` ignores exceptions if the target path does not exist.",
      "fs.rm replaces deprecated recursive fs.rmdir in modern Node.js."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-rm",
      "directory-deletion",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you recursively create nested directories in Node.js?",
    "answer": "`await fs.mkdir(nestedPath, { recursive: true });`. Setting `{ recursive: true }` behaves like the `mkdir -p` shell command: it creates all parent directories in the path if they do not exist and does not throw an error if the directory already exists.",
    "explanation": "Equivalent to mkdir -p in shell; creates intermediate parent directories safely.",
    "interviewAnswer": "`await fs.mkdir(nestedPath, { recursive: true });`. Setting `{ recursive: true }` behaves like the `mkdir -p` shell command: it creates all parent directories in the path if they do not exist and does not throw an error if the directory already exists. Equivalent to mkdir -p in shell; creates intermediate parent directories safely.",
    "importantPoints": [
      "`await fs.mkdir(nestedPath, { recursive: true });`. Setting `{ recursive: true }` behaves like the `mkdir -p` shell command: it creates all parent directories in the path if they do not exist and does not throw an error if the directory already exists.",
      "Equivalent to mkdir -p in shell; creates intermediate parent directories safely."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-mkdir",
      "recursive",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What are File Permissions (Mode) in Node.js (e.g. 0o755, 0o644), and how does the process umask affect them?",
    "answer": "File modes are octal numbers defining read/write/execute permissions for User, Group, and Others. `0o644` means User can read/write, Group/Others read-only. `0o755` adds execute permissions. When creating files, the effective permission is masked with the process `umask`: `mode & ~umask` (e.g. if umask is 0o022, 0o666 becomes 0o644).",
    "explanation": "Octal permission bitmasks modified by the process umask mask.",
    "interviewAnswer": "File modes are octal numbers defining read/write/execute permissions for User, Group, and Others. `0o644` means User can read/write, Group/Others read-only. `0o755` adds execute permissions. When creating files, the effective permission is masked with the process `umask`: `mode & ~umask` (e.g. if umask is 0o022, 0o666 becomes 0o644). Octal permission bitmasks modified by the process umask mask.",
    "importantPoints": [
      "File modes are octal numbers defining read/write/execute permissions for User, Group, and Others. `0o644` means User can read/write, Group/Others read-only. `0o755` adds execute permissions. When creating files, the effective permission is masked with the process `umask`: `mode & ~umask` (e.g. if umask is 0o022, 0o666 becomes 0o644).",
      "Octal permission bitmasks modified by the process umask mask."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "permissions",
      "chmod",
      "umask",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you stream a multi-gigabyte CSV file line-by-line without running out of memory in Node.js?",
    "answer": "Use `node:readline` with a file read stream: `const readline = require(\"readline\"); const fs = require(\"fs\"); const rl = readline.createInterface({ input: fs.createReadStream(\"huge.csv\"), crlfDelay: Infinity }); for await (const line of rl) { processLine(line); }`. Memory remains under 30MB regardless of file size.",
    "explanation": "readline interface over a read stream processes lines lazily with O(1) memory.",
    "interviewAnswer": "Use `node:readline` with a file read stream: `const readline = require(\"readline\"); const fs = require(\"fs\"); const rl = readline.createInterface({ input: fs.createReadStream(\"huge.csv\"), crlfDelay: Infinity }); for await (const line of rl) { processLine(line); }`. Memory remains under 30MB regardless of file size. readline interface over a read stream processes lines lazily with O(1) memory.",
    "importantPoints": [
      "Use `node:readline` with a file read stream: `const readline = require(\"readline\"); const fs = require(\"fs\"); const rl = readline.createInterface({ input: fs.createReadStream(\"huge.csv\"), crlfDelay: Infinity }); for await (const line of rl) { processLine(line); }`. Memory remains under 30MB regardless of file size.",
      "readline interface over a read stream processes lines lazily with O(1) memory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "readline",
      "csv",
      "streaming",
      "memory-efficiency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between fs.truncate() and writing with flag \"w\"?",
    "answer": "`fs.truncate(path, len)` resizes an existing file to `len` bytes (default 0) without closing or re-opening the file handle. Writing with flag `\"w\"` creates a new file or truncates the file to 0 bytes upon opening.",
    "explanation": "truncate resizes an existing file to a specified byte boundary.",
    "interviewAnswer": "`fs.truncate(path, len)` resizes an existing file to `len` bytes (default 0) without closing or re-opening the file handle. Writing with flag `\"w\"` creates a new file or truncates the file to 0 bytes upon opening. truncate resizes an existing file to a specified byte boundary.",
    "importantPoints": [
      "`fs.truncate(path, len)` resizes an existing file to `len` bytes (default 0) without closing or re-opening the file handle. Writing with flag `\"w\"` creates a new file or truncates the file to 0 bytes upon opening.",
      "truncate resizes an existing file to a specified byte boundary."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "fs-truncate",
      "file-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the purpose of fs.copyFile() compared to piping read and write streams?",
    "answer": "`fs.copyFile(src, dest)` delegates file copying directly to operating system kernel copy mechanisms (such as `copy_file_range` or `sendfile` on Linux). This performs zero-copy cloning in kernel space, avoiding transferring file data back and forth through user-space V8 buffers, making it 5-10x faster than stream piping.",
    "explanation": "Zero-copy kernel-level file duplication without user-space buffer overhead.",
    "interviewAnswer": "`fs.copyFile(src, dest)` delegates file copying directly to operating system kernel copy mechanisms (such as `copy_file_range` or `sendfile` on Linux). This performs zero-copy cloning in kernel space, avoiding transferring file data back and forth through user-space V8 buffers, making it 5-10x faster than stream piping. Zero-copy kernel-level file duplication without user-space buffer overhead.",
    "importantPoints": [
      "`fs.copyFile(src, dest)` delegates file copying directly to operating system kernel copy mechanisms (such as `copy_file_range` or `sendfile` on Linux). This performs zero-copy cloning in kernel space, avoiding transferring file data back and forth through user-space V8 buffers, making it 5-10x faster than stream piping.",
      "Zero-copy kernel-level file duplication without user-space buffer overhead."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-copyfile",
      "zero-copy",
      "kernel",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How does Node.js handle temporary files securely using the os.tmpdir() and fs.mkdtemp() APIs?",
    "answer": "`const os = require(\"os\"); const fs = require(\"fs/promises\"); const path = require(\"path\"); const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), \"app-\"));`. `fs.mkdtemp` appends 6 cryptographically random characters to the prefix and creates an exclusive directory with strict permissions (`0o700`), preventing symlink spoofing and file collision attacks.",
    "explanation": "Creates exclusive randomly named directories in system temp folder with secure 0700 permissions.",
    "interviewAnswer": "`const os = require(\"os\"); const fs = require(\"fs/promises\"); const path = require(\"path\"); const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), \"app-\"));`. `fs.mkdtemp` appends 6 cryptographically random characters to the prefix and creates an exclusive directory with strict permissions (`0o700`), preventing symlink spoofing and file collision attacks. Creates exclusive randomly named directories in system temp folder with secure 0700 permissions.",
    "importantPoints": [
      "`const os = require(\"os\"); const fs = require(\"fs/promises\"); const path = require(\"path\"); const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), \"app-\"));`. `fs.mkdtemp` appends 6 cryptographically random characters to the prefix and creates an exclusive directory with strict permissions (`0o700`), preventing symlink spoofing and file collision attacks.",
      "Creates exclusive randomly named directories in system temp folder with secure 0700 permissions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-mkdtemp",
      "tmpdir",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the output of: const fs = require(\"fs\"); fs.writeFileSync(\"test.txt\", \"Hello\"); const data = fs.readFileSync(\"test.txt\"); console.log(data instanceof Buffer);?",
    "answer": "Outputs true. When `fs.readFileSync()` is called without specifying an encoding string (e.g. \"utf8\"), it returns a raw binary `Buffer` instance containing the byte representation of the file.",
    "explanation": "Omitting encoding in fs.readFile/readFileSync returns a raw Buffer.",
    "interviewAnswer": "Outputs true. When `fs.readFileSync()` is called without specifying an encoding string (e.g. \"utf8\"), it returns a raw binary `Buffer` instance containing the byte representation of the file. Omitting encoding in fs.readFile/readFileSync returns a raw Buffer.",
    "importantPoints": [
      "Outputs true. When `fs.readFileSync()` is called without specifying an encoding string (e.g. \"utf8\"), it returns a raw binary `Buffer` instance containing the byte representation of the file.",
      "Omitting encoding in fs.readFile/readFileSync returns a raw Buffer."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "fs",
      "buffers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between path.extname() and path.basename()?",
    "answer": "`path.extname(\"file.test.js\")` returns the file extension string starting from the last dot (`\".js\"`). `path.basename(\"dir/file.test.js\")` returns the final path component (`\"file.test.js\"`). Passing an optional suffix: `path.basename(\"dir/file.test.js\", \".js\")` strips the extension, returning `\"file.test\"`.",
    "explanation": "basename = filename; extname = extension starting from last dot.",
    "interviewAnswer": "`path.extname(\"file.test.js\")` returns the file extension string starting from the last dot (`\".js\"`). `path.basename(\"dir/file.test.js\")` returns the final path component (`\"file.test.js\"`). Passing an optional suffix: `path.basename(\"dir/file.test.js\", \".js\")` strips the extension, returning `\"file.test\"`. basename = filename; extname = extension starting from last dot.",
    "importantPoints": [
      "`path.extname(\"file.test.js\")` returns the file extension string starting from the last dot (`\".js\"`). `path.basename(\"dir/file.test.js\")` returns the final path component (`\"file.test.js\"`). Passing an optional suffix: `path.basename(\"dir/file.test.js\", \".js\")` strips the extension, returning `\"file.test\"`.",
      "basename = filename; extname = extension starting from last dot."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "path",
      "extname",
      "basename"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How does Node.js handle file locking across processes without external dependencies?",
    "answer": "By opening an exclusive lockfile with the `\"wx\"` flag: `fs.openSync(\"app.lock\", \"wx\")`. If the file already exists, it throws `EEXIST`, signaling that another process holds the lock. The holding process removes the lockfile upon completion or exit. Native advisory file locks (`flock` / `fcntl`) can also be achieved via C++ addons.",
    "explanation": "Exclusive flag \"wx\" fails if file exists, providing atomic mutual exclusion across processes.",
    "interviewAnswer": "By opening an exclusive lockfile with the `\"wx\"` flag: `fs.openSync(\"app.lock\", \"wx\")`. If the file already exists, it throws `EEXIST`, signaling that another process holds the lock. The holding process removes the lockfile upon completion or exit. Native advisory file locks (`flock` / `fcntl`) can also be achieved via C++ addons. Exclusive flag \"wx\" fails if file exists, providing atomic mutual exclusion across processes.",
    "importantPoints": [
      "By opening an exclusive lockfile with the `\"wx\"` flag: `fs.openSync(\"app.lock\", \"wx\")`. If the file already exists, it throws `EEXIST`, signaling that another process holds the lock. The holding process removes the lockfile upon completion or exit. Native advisory file locks (`flock` / `fcntl`) can also be achieved via C++ addons.",
      "Exclusive flag \"wx\" fails if file exists, providing atomic mutual exclusion across processes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "nodejs",
      "file-locking",
      "concurrency",
      "ipc"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the difference between synchronous statSync() and fs.promises.stat() under heavy thread pool load?",
    "answer": "`statSync()` performs a synchronous OS syscall directly on the main thread, immediately pausing JavaScript execution. `fs.promises.stat()` queues a task onto the libuv thread pool. If all 4 libuv threads are blocked with long-running crypto operations, `fs.promises.stat()` must wait in the thread pool queue, taking longer than `statSync()`.",
    "explanation": "Asynchronous fs uses the libuv thread pool; heavy pool load delays async operations behind crypto/zip.",
    "interviewAnswer": "`statSync()` performs a synchronous OS syscall directly on the main thread, immediately pausing JavaScript execution. `fs.promises.stat()` queues a task onto the libuv thread pool. If all 4 libuv threads are blocked with long-running crypto operations, `fs.promises.stat()` must wait in the thread pool queue, taking longer than `statSync()`. Asynchronous fs uses the libuv thread pool; heavy pool load delays async operations behind crypto/zip.",
    "importantPoints": [
      "`statSync()` performs a synchronous OS syscall directly on the main thread, immediately pausing JavaScript execution. `fs.promises.stat()` queues a task onto the libuv thread pool. If all 4 libuv threads are blocked with long-running crypto operations, `fs.promises.stat()` must wait in the thread pool queue, taking longer than `statSync()`.",
      "Asynchronous fs uses the libuv thread pool; heavy pool load delays async operations behind crypto/zip."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-stat",
      "thread-pool",
      "latency",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you calculate the cryptographic hash (SHA-256) of a 10GB file without crashing Node.js with an Out-of-Memory error?",
    "answer": "Stream the file into a crypto Hash transform: `const crypto = require(\"crypto\"); const fs = require(\"fs\"); const hash = crypto.createHash(\"sha256\"); const stream = fs.createReadStream(\"10gb.iso\"); stream.on(\"data\", chunk => hash.update(chunk)); stream.on(\"end\", () => console.log(hash.digest(\"hex\")));`. Data streams in 64KB chunks, using constant <30MB RAM.",
    "explanation": "Streams pipe chunks through crypto.createHash without buffering the 10GB file into RAM.",
    "interviewAnswer": "Stream the file into a crypto Hash transform: `const crypto = require(\"crypto\"); const fs = require(\"fs\"); const hash = crypto.createHash(\"sha256\"); const stream = fs.createReadStream(\"10gb.iso\"); stream.on(\"data\", chunk => hash.update(chunk)); stream.on(\"end\", () => console.log(hash.digest(\"hex\")));`. Data streams in 64KB chunks, using constant <30MB RAM. Streams pipe chunks through crypto.createHash without buffering the 10GB file into RAM.",
    "importantPoints": [
      "Stream the file into a crypto Hash transform: `const crypto = require(\"crypto\"); const fs = require(\"fs\"); const hash = crypto.createHash(\"sha256\"); const stream = fs.createReadStream(\"10gb.iso\"); stream.on(\"data\", chunk => hash.update(chunk)); stream.on(\"end\", () => console.log(hash.digest(\"hex\")));`. Data streams in 64KB chunks, using constant <30MB RAM.",
      "Streams pipe chunks through crypto.createHash without buffering the 10GB file into RAM."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "crypto",
      "streams",
      "memory-management",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What is the purpose of fs.constants in Node.js?",
    "answer": "`fs.constants` exports operating system flags for: 1) File access permissions (`F_OK`, `R_OK`, `W_OK`, `X_OK` for `fs.access`), 2) File open flags (`O_RDONLY`, `O_WRONLY`, `O_CREAT`, `O_EXCL`), 3) File type masks (`S_IFREG`, `S_IFDIR`). It standardizes numeric OS constants across Linux, macOS, and Windows.",
    "explanation": "Exports OS bitmask constants for file open modes and permission checks.",
    "interviewAnswer": "`fs.constants` exports operating system flags for: 1) File access permissions (`F_OK`, `R_OK`, `W_OK`, `X_OK` for `fs.access`), 2) File open flags (`O_RDONLY`, `O_WRONLY`, `O_CREAT`, `O_EXCL`), 3) File type masks (`S_IFREG`, `S_IFDIR`). It standardizes numeric OS constants across Linux, macOS, and Windows. Exports OS bitmask constants for file open modes and permission checks.",
    "importantPoints": [
      "`fs.constants` exports operating system flags for: 1) File access permissions (`F_OK`, `R_OK`, `W_OK`, `X_OK` for `fs.access`), 2) File open flags (`O_RDONLY`, `O_WRONLY`, `O_CREAT`, `O_EXCL`), 3) File type masks (`S_IFREG`, `S_IFDIR`). It standardizes numeric OS constants across Linux, macOS, and Windows.",
      "Exports OS bitmask constants for file open modes and permission checks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "fs-constants",
      "bitmasks",
      "operating-system"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "What causes the error `EBUSY: resource busy or locked` on Windows systems during file operations?",
    "answer": "On Windows, the OS enforces mandatory file locking: an open file handle cannot be deleted, renamed, or replaced by another operation. If an antivirus scanner, indexing service, or another stream has the file open, Node.js file operations fail with `EBUSY`. On POSIX/Linux, files can be deleted or renamed even while open handles exist.",
    "explanation": "Windows mandatory locking prevents deleting or renaming files with active open handles.",
    "interviewAnswer": "On Windows, the OS enforces mandatory file locking: an open file handle cannot be deleted, renamed, or replaced by another operation. If an antivirus scanner, indexing service, or another stream has the file open, Node.js file operations fail with `EBUSY`. On POSIX/Linux, files can be deleted or renamed even while open handles exist. Windows mandatory locking prevents deleting or renaming files with active open handles.",
    "importantPoints": [
      "On Windows, the OS enforces mandatory file locking: an open file handle cannot be deleted, renamed, or replaced by another operation. If an antivirus scanner, indexing service, or another stream has the file open, Node.js file operations fail with `EBUSY`. On POSIX/Linux, files can be deleted or renamed even while open handles exist.",
      "Windows mandatory locking prevents deleting or renaming files with active open handles."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "ebusy",
      "windows",
      "file-locking",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "file-system",
    "question": "How do you implement an asynchronous file watcher in Node.js that debounces rapid duplicate change events?",
    "answer": "`function watchDebounced(file, callback, delay = 200) { let timer; return fs.watch(file, (eventType) => { clearTimeout(timer); timer = setTimeout(() => callback(eventType), delay); }); }`. OS file watchers frequently emit multiple \"change\" events for a single save operation; debouncing collapses them into one notification.",
    "explanation": "Debouncing OS file watcher events prevents duplicate builds and redundant reloads.",
    "interviewAnswer": "`function watchDebounced(file, callback, delay = 200) { let timer; return fs.watch(file, (eventType) => { clearTimeout(timer); timer = setTimeout(() => callback(eventType), delay); }); }`. OS file watchers frequently emit multiple \"change\" events for a single save operation; debouncing collapses them into one notification. Debouncing OS file watcher events prevents duplicate builds and redundant reloads.",
    "importantPoints": [
      "`function watchDebounced(file, callback, delay = 200) { let timer; return fs.watch(file, (eventType) => { clearTimeout(timer); timer = setTimeout(() => callback(eventType), delay); }); }`. OS file watchers frequently emit multiple \"change\" events for a single save operation; debouncing collapses them into one notification.",
      "Debouncing OS file watcher events prevents duplicate builds and redundant reloads."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fs-watch",
      "debounce",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
