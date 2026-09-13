import { SeedQuestion } from '../types';

export const nodeNpmPackagesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the purpose of package-lock.json, and what disaster occurs when it is ignored or omitted from git repositories?",
    "answer": "`package-lock.json` locks the exact dependency tree: every package, transitive dependency, resolved tarball URL, and cryptographic SHA integrity hash. Without it, running `npm install` across team members or CI/CD servers installs the newest compatible semver versions, causing breaking changes, inconsistent production builds, and vulnerability to supply-chain attacks.",
    "explanation": "Guarantees 100% reproducible builds; must always be committed to version control.",
    "interviewAnswer": "`package-lock.json` locks the exact dependency tree: every package, transitive dependency, resolved tarball URL, and cryptographic SHA integrity hash. Without it, running `npm install` across team members or CI/CD servers installs the newest compatible semver versions, causing breaking changes, inconsistent production builds, and vulnerability to supply-chain attacks. Guarantees 100% reproducible builds; must always be committed to version control.",
    "importantPoints": [
      "`package-lock.json` locks the exact dependency tree: every package, transitive dependency, resolved tarball URL, and cryptographic SHA integrity hash. Without it, running `npm install` across team members or CI/CD servers installs the newest compatible semver versions, causing breaking changes, inconsistent production builds, and vulnerability to supply-chain attacks.",
      "Guarantees 100% reproducible builds; must always be committed to version control."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "package-lock",
      "reproducibility",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the difference between `npm install` and `npm ci` in production and CI/CD pipelines?",
    "answer": "`npm install` updates `package-lock.json` if versions in `package.json` do not match, and can install newer semver-compatible versions. `npm ci` (Clean Install) strictly requires `package-lock.json`, wipes `node_modules`, and installs exact pinned versions without ever modifying the lockfile. It is faster, deterministic, and mandatory for CI/CD and Docker builds.",
    "explanation": "npm ci deletes node_modules and enforces exact lockfile integrity; never updates lockfile.",
    "interviewAnswer": "`npm install` updates `package-lock.json` if versions in `package.json` do not match, and can install newer semver-compatible versions. `npm ci` (Clean Install) strictly requires `package-lock.json`, wipes `node_modules`, and installs exact pinned versions without ever modifying the lockfile. It is faster, deterministic, and mandatory for CI/CD and Docker builds. npm ci deletes node_modules and enforces exact lockfile integrity; never updates lockfile.",
    "importantPoints": [
      "`npm install` updates `package-lock.json` if versions in `package.json` do not match, and can install newer semver-compatible versions. `npm ci` (Clean Install) strictly requires `package-lock.json`, wipes `node_modules`, and installs exact pinned versions without ever modifying the lockfile. It is faster, deterministic, and mandatory for CI/CD and Docker builds.",
      "npm ci deletes node_modules and enforces exact lockfile integrity; never updates lockfile."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "npm-ci",
      "cicd",
      "docker"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "How does Semantic Versioning (SemVer) work in npm, and what is the difference between `^1.2.3`, `~1.2.3`, and `1.2.3`?",
    "answer": "SemVer format is `MAJOR.MINOR.PATCH` (Breaking.NewFeature.BugFix). 1) `1.2.3`: Exact pinned version only. 2) `~1.2.3` (Tilde): Allows PATCH upgrades up to `< 1.3.0` (bug fixes only). 3) `^1.2.3` (Caret, npm default): Allows MINOR and PATCH upgrades up to `< 2.0.0` (backward-compatible features and bug fixes).",
    "explanation": "Caret ^ allows minor/patch updates; Tilde ~ allows patch only; exact pins version strictly.",
    "interviewAnswer": "SemVer format is `MAJOR.MINOR.PATCH` (Breaking.NewFeature.BugFix). 1) `1.2.3`: Exact pinned version only. 2) `~1.2.3` (Tilde): Allows PATCH upgrades up to `< 1.3.0` (bug fixes only). 3) `^1.2.3` (Caret, npm default): Allows MINOR and PATCH upgrades up to `< 2.0.0` (backward-compatible features and bug fixes). Caret ^ allows minor/patch updates; Tilde ~ allows patch only; exact pins version strictly.",
    "importantPoints": [
      "SemVer format is `MAJOR.MINOR.PATCH` (Breaking.NewFeature.BugFix). 1) `1.2.3`: Exact pinned version only. 2) `~1.2.3` (Tilde): Allows PATCH upgrades up to `< 1.3.0` (bug fixes only). 3) `^1.2.3` (Caret, npm default): Allows MINOR and PATCH upgrades up to `< 2.0.0` (backward-compatible features and bug fixes).",
      "Caret ^ allows minor/patch updates; Tilde ~ allows patch only; exact pins version strictly."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "semver",
      "versioning"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the difference between dependencies, devDependencies, peerDependencies, and optionalDependencies in package.json?",
    "answer": "1) dependencies: Packages required in production runtime (e.g. express, pg). 2) devDependencies: Packages needed only during local development/testing/build (e.g. jest, typescript, eslint). 3) peerDependencies: Expects the host application to supply a specific version of a package (e.g. react in a component library). 4) optionalDependencies: Packages that can fail installation without breaking the build.",
    "explanation": "dependencies = runtime; devDependencies = dev/build; peerDependencies = host supplied; optional = non-critical.",
    "interviewAnswer": "1) dependencies: Packages required in production runtime (e.g. express, pg). 2) devDependencies: Packages needed only during local development/testing/build (e.g. jest, typescript, eslint). 3) peerDependencies: Expects the host application to supply a specific version of a package (e.g. react in a component library). 4) optionalDependencies: Packages that can fail installation without breaking the build. dependencies = runtime; devDependencies = dev/build; peerDependencies = host supplied; optional = non-critical.",
    "importantPoints": [
      "1) dependencies: Packages required in production runtime (e.g. express, pg). 2) devDependencies: Packages needed only during local development/testing/build (e.g. jest, typescript, eslint). 3) peerDependencies: Expects the host application to supply a specific version of a package (e.g. react in a component library). 4) optionalDependencies: Packages that can fail installation without breaking the build.",
      "dependencies = runtime; devDependencies = dev/build; peerDependencies = host supplied; optional = non-critical."
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
      "npm",
      "dependencies",
      "peerDependencies",
      "package-json"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "How do you install only production dependencies in a Docker container to reduce image size and attack surface?",
    "answer": "Run `npm ci --omit=dev` (or `npm ci --production`). This skips all devDependencies (TypeScript compilers, linters, test frameworks), drastically shrinking container size, speeding up deployment, and preventing dev tools from introducing production vulnerabilities.",
    "explanation": "npm ci --omit=dev installs only production dependencies, minimizing container bloat.",
    "interviewAnswer": "Run `npm ci --omit=dev` (or `npm ci --production`). This skips all devDependencies (TypeScript compilers, linters, test frameworks), drastically shrinking container size, speeding up deployment, and preventing dev tools from introducing production vulnerabilities. npm ci --omit=dev installs only production dependencies, minimizing container bloat.",
    "importantPoints": [
      "Run `npm ci --omit=dev` (or `npm ci --production`). This skips all devDependencies (TypeScript compilers, linters, test frameworks), drastically shrinking container size, speeding up deployment, and preventing dev tools from introducing production vulnerabilities.",
      "npm ci --omit=dev installs only production dependencies, minimizing container bloat."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "docker",
      "production",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is `npx`, and how does it differ from `npm run`?",
    "answer": "`npx` (Node Package Execute) executes npm package binaries. If the binary exists in local `./node_modules/.bin`, it executes it directly. If not installed locally, `npx` downloads it to a temporary cache, executes it, and discards it (e.g. `npx create-react-app`). `npm run` executes custom scripts defined inside the `package.json` `\"scripts\"` section.",
    "explanation": "npx executes CLI binaries on-the-fly without global installation; npm run invokes package scripts.",
    "interviewAnswer": "`npx` (Node Package Execute) executes npm package binaries. If the binary exists in local `./node_modules/.bin`, it executes it directly. If not installed locally, `npx` downloads it to a temporary cache, executes it, and discards it (e.g. `npx create-react-app`). `npm run` executes custom scripts defined inside the `package.json` `\"scripts\"` section. npx executes CLI binaries on-the-fly without global installation; npm run invokes package scripts.",
    "importantPoints": [
      "`npx` (Node Package Execute) executes npm package binaries. If the binary exists in local `./node_modules/.bin`, it executes it directly. If not installed locally, `npx` downloads it to a temporary cache, executes it, and discards it (e.g. `npx create-react-app`). `npm run` executes custom scripts defined inside the `package.json` `\"scripts\"` section.",
      "npx executes CLI binaries on-the-fly without global installation; npm run invokes package scripts."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "npx",
      "cli",
      "tooling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What are npm pre and post lifecycle scripts, and how do they execute automatically?",
    "answer": "npm automatically runs scripts with the `pre` or `post` prefix around any named script. If you define `\"test\"` and `\"pretest\"`, running `npm test` automatically executes `npm run pretest`, then `npm run test`, and finally `npm run posttest` if defined. Common uses include running linters before testing or building before deploying.",
    "explanation": "pre<script> and post<script> execute before and after the targeted npm script.",
    "interviewAnswer": "npm automatically runs scripts with the `pre` or `post` prefix around any named script. If you define `\"test\"` and `\"pretest\"`, running `npm test` automatically executes `npm run pretest`, then `npm run test`, and finally `npm run posttest` if defined. Common uses include running linters before testing or building before deploying. pre<script> and post<script> execute before and after the targeted npm script.",
    "importantPoints": [
      "npm automatically runs scripts with the `pre` or `post` prefix around any named script. If you define `\"test\"` and `\"pretest\"`, running `npm test` automatically executes `npm run pretest`, then `npm run test`, and finally `npm run posttest` if defined. Common uses include running linters before testing or building before deploying.",
      "pre<script> and post<script> execute before and after the targeted npm script."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "npm-scripts",
      "lifecycle"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the purpose of `npm audit`, and what are its limitations in enterprise environments?",
    "answer": "`npm audit` checks the project dependency tree against the GitHub Advisory Database for known Common Vulnerabilities and Exposures (CVEs). Limitations: It frequently flags vulnerabilities in devDependencies (e.g. regular expression denial of service in a build tool) that pose zero production risk, creating alert fatigue and false alarms.",
    "explanation": "Scans for known CVEs; devDependency false alarms often create operational alert fatigue.",
    "interviewAnswer": "`npm audit` checks the project dependency tree against the GitHub Advisory Database for known Common Vulnerabilities and Exposures (CVEs). Limitations: It frequently flags vulnerabilities in devDependencies (e.g. regular expression denial of service in a build tool) that pose zero production risk, creating alert fatigue and false alarms. Scans for known CVEs; devDependency false alarms often create operational alert fatigue.",
    "importantPoints": [
      "`npm audit` checks the project dependency tree against the GitHub Advisory Database for known Common Vulnerabilities and Exposures (CVEs). Limitations: It frequently flags vulnerabilities in devDependencies (e.g. regular expression denial of service in a build tool) that pose zero production risk, creating alert fatigue and false alarms.",
      "Scans for known CVEs; devDependency false alarms often create operational alert fatigue."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "npm-audit",
      "security",
      "cve"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is Dependency Confusion in npm, and how do you protect corporate private packages against it?",
    "answer": "Dependency Confusion is a supply chain attack where an attacker registers a public package on npmjs.com with the same name as a company internal private package (e.g. `@corp/internal-auth`). If the build server npm configuration is improperly scoped, it may prioritize the higher version from the public registry over the private registry. Protect using Scoped Packages (`@myorg/pkg`) and strict `.npmrc` registry routing.",
    "explanation": "Attackers register matching names publicly; prevent using scoped namespaces and locked npmrc registries.",
    "interviewAnswer": "Dependency Confusion is a supply chain attack where an attacker registers a public package on npmjs.com with the same name as a company internal private package (e.g. `@corp/internal-auth`). If the build server npm configuration is improperly scoped, it may prioritize the higher version from the public registry over the private registry. Protect using Scoped Packages (`@myorg/pkg`) and strict `.npmrc` registry routing. Attackers register matching names publicly; prevent using scoped namespaces and locked npmrc registries.",
    "importantPoints": [
      "Dependency Confusion is a supply chain attack where an attacker registers a public package on npmjs.com with the same name as a company internal private package (e.g. `@corp/internal-auth`). If the build server npm configuration is improperly scoped, it may prioritize the higher version from the public registry over the private registry. Protect using Scoped Packages (`@myorg/pkg`) and strict `.npmrc` registry routing.",
      "Attackers register matching names publicly; prevent using scoped namespaces and locked npmrc registries."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "dependency-confusion",
      "security",
      "supply-chain"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What are npm Workspaces, and how do they manage multi-package monorepos?",
    "answer": "npm Workspaces (native in npm 7+) allow managing multiple packages from a single top-level root package.json: `\"workspaces\": [\"packages/*\"]`. It hoists shared dependencies to the root `node_modules` to prevent duplication, links local sibling packages automatically, and allows running commands across all packages via `npm run test --workspaces`.",
    "explanation": "Native npm monorepo management with hoisted dependencies and cross-package symlinking.",
    "interviewAnswer": "npm Workspaces (native in npm 7+) allow managing multiple packages from a single top-level root package.json: `\"workspaces\": [\"packages/*\"]`. It hoists shared dependencies to the root `node_modules` to prevent duplication, links local sibling packages automatically, and allows running commands across all packages via `npm run test --workspaces`. Native npm monorepo management with hoisted dependencies and cross-package symlinking.",
    "importantPoints": [
      "npm Workspaces (native in npm 7+) allow managing multiple packages from a single top-level root package.json: `\"workspaces\": [\"packages/*\"]`. It hoists shared dependencies to the root `node_modules` to prevent duplication, links local sibling packages automatically, and allows running commands across all packages via `npm run test --workspaces`.",
      "Native npm monorepo management with hoisted dependencies and cross-package symlinking."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "workspaces",
      "monorepo",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the purpose of the `.npmrc` configuration file, and where can it reside?",
    "answer": "`.npmrc` defines npm configuration settings (custom registry URLs, authentication tokens, strict-ssl flags, proxy settings). It is resolved in order: 1) Project-level (`/project/.npmrc`), 2) User-level (`~/.npmrc`), and 3) Global-level (`$PREFIX/etc/npmrc`). Project-level `.npmrc` is used to enforce team-wide registry routing and package-lock strictness.",
    "explanation": "Controls registries, auth tokens, and install flags across project, user, and global scopes.",
    "interviewAnswer": "`.npmrc` defines npm configuration settings (custom registry URLs, authentication tokens, strict-ssl flags, proxy settings). It is resolved in order: 1) Project-level (`/project/.npmrc`), 2) User-level (`~/.npmrc`), and 3) Global-level (`$PREFIX/etc/npmrc`). Project-level `.npmrc` is used to enforce team-wide registry routing and package-lock strictness. Controls registries, auth tokens, and install flags across project, user, and global scopes.",
    "importantPoints": [
      "`.npmrc` defines npm configuration settings (custom registry URLs, authentication tokens, strict-ssl flags, proxy settings). It is resolved in order: 1) Project-level (`/project/.npmrc`), 2) User-level (`~/.npmrc`), and 3) Global-level (`$PREFIX/etc/npmrc`). Project-level `.npmrc` is used to enforce team-wide registry routing and package-lock strictness.",
      "Controls registries, auth tokens, and install flags across project, user, and global scopes."
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
      "npm",
      "npmrc",
      "configuration"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What does `npm link` do, and how does it facilitate local development of shared libraries?",
    "answer": "`npm link` creates a global symlink in the system npm directory for a package, and links that symlink into another local project `node_modules`. This allows a developer to edit code in a shared library and immediately see the changes reflected in the consuming application without publishing to npm.",
    "explanation": "Symlinks local packages into consuming apps for real-time multi-package local development.",
    "interviewAnswer": "`npm link` creates a global symlink in the system npm directory for a package, and links that symlink into another local project `node_modules`. This allows a developer to edit code in a shared library and immediately see the changes reflected in the consuming application without publishing to npm. Symlinks local packages into consuming apps for real-time multi-package local development.",
    "importantPoints": [
      "`npm link` creates a global symlink in the system npm directory for a package, and links that symlink into another local project `node_modules`. This allows a developer to edit code in a shared library and immediately see the changes reflected in the consuming application without publishing to npm.",
      "Symlinks local packages into consuming apps for real-time multi-package local development."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "npm-link",
      "symlinks",
      "tooling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the difference between bundledDependencies and normal dependencies in npm?",
    "answer": "`bundledDependencies` is an array of package names in `package.json` that will be packaged and included inside the published npm tarball itself. When a consumer installs your package, npm extracts the bundled dependencies directly without downloading them from the registry, ideal for offline or proprietary packages.",
    "explanation": "Packages included inside the published tarball itself, avoiding registry downloads.",
    "interviewAnswer": "`bundledDependencies` is an array of package names in `package.json` that will be packaged and included inside the published npm tarball itself. When a consumer installs your package, npm extracts the bundled dependencies directly without downloading them from the registry, ideal for offline or proprietary packages. Packages included inside the published tarball itself, avoiding registry downloads.",
    "importantPoints": [
      "`bundledDependencies` is an array of package names in `package.json` that will be packaged and included inside the published npm tarball itself. When a consumer installs your package, npm extracts the bundled dependencies directly without downloading them from the registry, ideal for offline or proprietary packages.",
      "Packages included inside the published tarball itself, avoiding registry downloads."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "bundledDependencies",
      "packaging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What are overrides in package.json (npm 8+), and how do you use them to fix vulnerabilities in transitive dependencies?",
    "answer": "The `\"overrides\"` field forces npm to replace a specific nested transitive dependency across the entire dependency graph with a secure patched version: `\"overrides\": { \"semver\": \"^7.5.4\" }`. This allows developers to resolve deep vulnerability alerts without waiting for upstream library maintainers to publish a release.",
    "explanation": "Forces exact replacement of nested transitive dependencies across the entire tree.",
    "interviewAnswer": "The `\"overrides\"` field forces npm to replace a specific nested transitive dependency across the entire dependency graph with a secure patched version: `\"overrides\": { \"semver\": \"^7.5.4\" }`. This allows developers to resolve deep vulnerability alerts without waiting for upstream library maintainers to publish a release. Forces exact replacement of nested transitive dependencies across the entire tree.",
    "importantPoints": [
      "The `\"overrides\"` field forces npm to replace a specific nested transitive dependency across the entire dependency graph with a secure patched version: `\"overrides\": { \"semver\": \"^7.5.4\" }`. This allows developers to resolve deep vulnerability alerts without waiting for upstream library maintainers to publish a release.",
      "Forces exact replacement of nested transitive dependencies across the entire tree."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "overrides",
      "security",
      "cve"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "How does package.json `\"files\"` field differ from `.npmignore` when publishing a package?",
    "answer": "The `\"files\"` field is an allowlist in `package.json` specifying the exact files and directories to include in the published npm package (e.g. `[\"dist\", \"README.md\"]`). `.npmignore` is a blocklist. Best practice is to use the `\"files\"` allowlist to guarantee source code, tests, and configuration files are never accidentally leaked.",
    "explanation": "files = allowlist (secure); .npmignore = blocklist (prone to accidental file leakage).",
    "interviewAnswer": "The `\"files\"` field is an allowlist in `package.json` specifying the exact files and directories to include in the published npm package (e.g. `[\"dist\", \"README.md\"]`). `.npmignore` is a blocklist. Best practice is to use the `\"files\"` allowlist to guarantee source code, tests, and configuration files are never accidentally leaked. files = allowlist (secure); .npmignore = blocklist (prone to accidental file leakage).",
    "importantPoints": [
      "The `\"files\"` field is an allowlist in `package.json` specifying the exact files and directories to include in the published npm package (e.g. `[\"dist\", \"README.md\"]`). `.npmignore` is a blocklist. Best practice is to use the `\"files\"` allowlist to guarantee source code, tests, and configuration files are never accidentally leaked.",
      "files = allowlist (secure); .npmignore = blocklist (prone to accidental file leakage)."
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
      "npm",
      "files-field",
      "npmignore",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is Typosquatting in npm, and how do attackers use it to steal credentials?",
    "answer": "Typosquatting is a social engineering attack where malicious actors register package names that are slight misspellings of popular packages (e.g. `cross-env` vs `crossenv`, `electron` vs `electorn`). Unsuspecting developers install the typosquatted package, which runs an install script (`postinstall`) to exfiltrate `.env` files, SSH keys, or AWS credentials.",
    "explanation": "Misspelled package names executing malicious postinstall scripts to steal credentials.",
    "interviewAnswer": "Typosquatting is a social engineering attack where malicious actors register package names that are slight misspellings of popular packages (e.g. `cross-env` vs `crossenv`, `electron` vs `electorn`). Unsuspecting developers install the typosquatted package, which runs an install script (`postinstall`) to exfiltrate `.env` files, SSH keys, or AWS credentials. Misspelled package names executing malicious postinstall scripts to steal credentials.",
    "importantPoints": [
      "Typosquatting is a social engineering attack where malicious actors register package names that are slight misspellings of popular packages (e.g. `cross-env` vs `crossenv`, `electron` vs `electorn`). Unsuspecting developers install the typosquatted package, which runs an install script (`postinstall`) to exfiltrate `.env` files, SSH keys, or AWS credentials.",
      "Misspelled package names executing malicious postinstall scripts to steal credentials."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "typosquatting",
      "security",
      "supply-chain"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "How do you disable automatic package execution scripts during npm install to protect against malicious postinstall hooks?",
    "answer": "Run `npm install --ignore-scripts` (or `npm ci --ignore-scripts`). This prevents npm from executing arbitrary binary scripts defined in package `preinstall`, `install`, or `postinstall` hooks, eliminating the primary attack vector for supply chain malware.",
    "explanation": "Flag --ignore-scripts prevents third-party packages from running arbitrary shell scripts on install.",
    "interviewAnswer": "Run `npm install --ignore-scripts` (or `npm ci --ignore-scripts`). This prevents npm from executing arbitrary binary scripts defined in package `preinstall`, `install`, or `postinstall` hooks, eliminating the primary attack vector for supply chain malware. Flag --ignore-scripts prevents third-party packages from running arbitrary shell scripts on install.",
    "importantPoints": [
      "Run `npm install --ignore-scripts` (or `npm ci --ignore-scripts`). This prevents npm from executing arbitrary binary scripts defined in package `preinstall`, `install`, or `postinstall` hooks, eliminating the primary attack vector for supply chain malware.",
      "Flag --ignore-scripts prevents third-party packages from running arbitrary shell scripts on install."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "ignore-scripts",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the difference between npm, yarn, and pnpm package managers in how they structure `node_modules`?",
    "answer": "npm and yarn use a flat `node_modules` layout (hoisting dependencies to the top level), which causes phantom dependencies (importing packages not listed in package.json). pnpm uses a content-addressable global store with hard links and a non-flat nested symlinked `node_modules` structure, preventing phantom dependencies and saving gigabytes of disk space.",
    "explanation": "pnpm uses hard links and symlinks to prevent duplicate disk storage and phantom dependencies.",
    "interviewAnswer": "npm and yarn use a flat `node_modules` layout (hoisting dependencies to the top level), which causes phantom dependencies (importing packages not listed in package.json). pnpm uses a content-addressable global store with hard links and a non-flat nested symlinked `node_modules` structure, preventing phantom dependencies and saving gigabytes of disk space. pnpm uses hard links and symlinks to prevent duplicate disk storage and phantom dependencies.",
    "importantPoints": [
      "npm and yarn use a flat `node_modules` layout (hoisting dependencies to the top level), which causes phantom dependencies (importing packages not listed in package.json). pnpm uses a content-addressable global store with hard links and a non-flat nested symlinked `node_modules` structure, preventing phantom dependencies and saving gigabytes of disk space.",
      "pnpm uses hard links and symlinks to prevent duplicate disk storage and phantom dependencies."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "nodejs",
      "npm",
      "pnpm",
      "yarn",
      "node_modules"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is a \"Phantom Dependency\" (Ghost Dependency), and why is it dangerous in enterprise software?",
    "answer": "A Phantom Dependency occurs when code imports a package that is NOT listed in its own `package.json`, but happens to be hoisted into root `node_modules` by another library. If the library that brought in the transitive dependency updates or removes it, your code crashes in production with `MODULE_NOT_FOUND`.",
    "explanation": "Using unlisted hoisted dependencies that can disappear unexpectedly on upstream updates.",
    "interviewAnswer": "A Phantom Dependency occurs when code imports a package that is NOT listed in its own `package.json`, but happens to be hoisted into root `node_modules` by another library. If the library that brought in the transitive dependency updates or removes it, your code crashes in production with `MODULE_NOT_FOUND`. Using unlisted hoisted dependencies that can disappear unexpectedly on upstream updates.",
    "importantPoints": [
      "A Phantom Dependency occurs when code imports a package that is NOT listed in its own `package.json`, but happens to be hoisted into root `node_modules` by another library. If the library that brought in the transitive dependency updates or removes it, your code crashes in production with `MODULE_NOT_FOUND`.",
      "Using unlisted hoisted dependencies that can disappear unexpectedly on upstream updates."
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
      "npm",
      "phantom-dependency",
      "node_modules",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the package.json `\"engines\"` field, and how do you enforce strict Node.js version requirements?",
    "answer": "The `\"engines\"` field specifies compatible runtime versions: `\"engines\": { \"node\": \">=20.0.0\" }`. By default, npm only issues a warning if the host Node version does not match. To enforce hard rejection, add `engine-strict=true` in `.npmrc`.",
    "explanation": "Specifies Node version compatibility; enforced strictly via engine-strict=true in .npmrc.",
    "interviewAnswer": "The `\"engines\"` field specifies compatible runtime versions: `\"engines\": { \"node\": \">=20.0.0\" }`. By default, npm only issues a warning if the host Node version does not match. To enforce hard rejection, add `engine-strict=true` in `.npmrc`. Specifies Node version compatibility; enforced strictly via engine-strict=true in .npmrc.",
    "importantPoints": [
      "The `\"engines\"` field specifies compatible runtime versions: `\"engines\": { \"node\": \">=20.0.0\" }`. By default, npm only issues a warning if the host Node version does not match. To enforce hard rejection, add `engine-strict=true` in `.npmrc`.",
      "Specifies Node version compatibility; enforced strictly via engine-strict=true in .npmrc."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "package-json",
      "engines",
      "version-enforcement"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the purpose of `npm pack`, and how do you use it to inspect what files will be published?",
    "answer": "`npm pack` creates a `.tgz` tarball exactly as it would be uploaded to the npm registry without actually publishing it. Running `tar -tf my-pkg-1.0.0.tgz` lets you inspect the contents to verify no secrets, `.env` files, or test suites are included before releasing.",
    "explanation": "Creates local tarball preview of the package for pre-publish validation.",
    "interviewAnswer": "`npm pack` creates a `.tgz` tarball exactly as it would be uploaded to the npm registry without actually publishing it. Running `tar -tf my-pkg-1.0.0.tgz` lets you inspect the contents to verify no secrets, `.env` files, or test suites are included before releasing. Creates local tarball preview of the package for pre-publish validation.",
    "importantPoints": [
      "`npm pack` creates a `.tgz` tarball exactly as it would be uploaded to the npm registry without actually publishing it. Running `tar -tf my-pkg-1.0.0.tgz` lets you inspect the contents to verify no secrets, `.env` files, or test suites are included before releasing.",
      "Creates local tarball preview of the package for pre-publish validation."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "npm-pack",
      "packaging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is `npm cache clean --force`, and when is it appropriate to use?",
    "answer": "It purges the global npm cache directory (`~/.npm`). It is only appropriate when the local cache has become corrupted (e.g. checksum mismatch errors EINTEGRITY). Since npm 5+, npm automatically validates cache integrity, making manual cache clearing rarely necessary.",
    "explanation": "Cleans ~/.npm cache; only needed during corrupted download or EINTEGRITY checksum errors.",
    "interviewAnswer": "It purges the global npm cache directory (`~/.npm`). It is only appropriate when the local cache has become corrupted (e.g. checksum mismatch errors EINTEGRITY). Since npm 5+, npm automatically validates cache integrity, making manual cache clearing rarely necessary. Cleans ~/.npm cache; only needed during corrupted download or EINTEGRITY checksum errors.",
    "importantPoints": [
      "It purges the global npm cache directory (`~/.npm`). It is only appropriate when the local cache has become corrupted (e.g. checksum mismatch errors EINTEGRITY). Since npm 5+, npm automatically validates cache integrity, making manual cache clearing rarely necessary.",
      "Cleans ~/.npm cache; only needed during corrupted download or EINTEGRITY checksum errors."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "cache",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "How does Semantic Release automate package publishing based on commit messages?",
    "answer": "Semantic Release inspects Conventional Commits (`feat:` -> minor version bump, `fix:` -> patch version bump, `BREAKING CHANGE:` -> major version bump). In CI/CD, it determines the next semver version, generates changelogs, creates git tags, and publishes to npm with zero manual version management.",
    "explanation": "Automates semver bumps, git tagging, and npm publishing from commit message conventions.",
    "interviewAnswer": "Semantic Release inspects Conventional Commits (`feat:` -> minor version bump, `fix:` -> patch version bump, `BREAKING CHANGE:` -> major version bump). In CI/CD, it determines the next semver version, generates changelogs, creates git tags, and publishes to npm with zero manual version management. Automates semver bumps, git tagging, and npm publishing from commit message conventions.",
    "importantPoints": [
      "Semantic Release inspects Conventional Commits (`feat:` -> minor version bump, `fix:` -> patch version bump, `BREAKING CHANGE:` -> major version bump). In CI/CD, it determines the next semver version, generates changelogs, creates git tags, and publishes to npm with zero manual version management.",
      "Automates semver bumps, git tagging, and npm publishing from commit message conventions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "semantic-release",
      "cicd",
      "automation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What are Scoped Packages in npm (e.g. `@myorg/ui`), and what are their visibility rules?",
    "answer": "Scoped packages group related packages under an organization namespace prefixed with `@organization/`. By default, publishing a scoped package publishes it as **private** (requiring an npm paid account). To publish a scoped package publicly, you must pass `--access public`: `npm publish --access public`.",
    "explanation": "Groups packages under @org namespace; private by default unless --access public is passed.",
    "interviewAnswer": "Scoped packages group related packages under an organization namespace prefixed with `@organization/`. By default, publishing a scoped package publishes it as **private** (requiring an npm paid account). To publish a scoped package publicly, you must pass `--access public`: `npm publish --access public`. Groups packages under @org namespace; private by default unless --access public is passed.",
    "importantPoints": [
      "Scoped packages group related packages under an organization namespace prefixed with `@organization/`. By default, publishing a scoped package publishes it as **private** (requiring an npm paid account). To publish a scoped package publicly, you must pass `--access public`: `npm publish --access public`.",
      "Groups packages under @org namespace; private by default unless --access public is passed."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "npm",
      "scoped-packages",
      "npm-publish"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "npm-packages",
    "question": "What is the package.json `\"sideEffects\"` property, and how does it affect tree-shaking in bundlers?",
    "answer": "`\"sideEffects\": false` informs bundlers (Webpack, Rollup, Vite) that no files in the package execute global side-effects (like modifying window, adding polyfills, or attaching globals). This allows bundlers to safely drop (tree-shake) any imported module whose exports are not directly referenced in user code.",
    "explanation": "Enables aggressive tree-shaking by declaring modules free of side-effects on import.",
    "interviewAnswer": "`\"sideEffects\": false` informs bundlers (Webpack, Rollup, Vite) that no files in the package execute global side-effects (like modifying window, adding polyfills, or attaching globals). This allows bundlers to safely drop (tree-shake) any imported module whose exports are not directly referenced in user code. Enables aggressive tree-shaking by declaring modules free of side-effects on import.",
    "importantPoints": [
      "`\"sideEffects\": false` informs bundlers (Webpack, Rollup, Vite) that no files in the package execute global side-effects (like modifying window, adding polyfills, or attaching globals). This allows bundlers to safely drop (tree-shake) any imported module whose exports are not directly referenced in user code.",
      "Enables aggressive tree-shaking by declaring modules free of side-effects on import."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "package-json",
      "side-effects",
      "tree-shaking",
      "bundlers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
