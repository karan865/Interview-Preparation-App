import { SeedQuestion } from './types';

export const gitQuestions: SeedQuestion[] = [
  // ==========================================
  // 1. Git Fundamentals (3 Questions: 2 Junior, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'git-fundamentals',
    question: 'What are the three main states (or trees) in Git, and how does data move between them?',
    title: 'The Three Trees in Git: Working Directory, Staging Area (Index), and Repository',
    answer:
      'Git manages project files through three main states: 1) **Working Directory**: The actual sandbox on your local file system where files are actively edited. 2) **Staging Area (Index)**: An intermediate holding area that prepares and formats the exact snapshot of changes intended for the next commit (`git add`). 3) **Repository (.git directory)**: The permanent database where committed snapshots are immutably stored with full cryptographic history (`git commit`).',
    explanation:
      'Files transition between three states: Modified (changed in working tree but not staged), Staged (marked in index for commit), and Committed (safely stored in the `.git` database). Checking out a branch or commit moves data from the Repository back into the Working Directory.',
    interviewAnswer:
      'Git operates across three distinct stages. First is the Working Directory, which is your local folder where you edit files. Second is the Staging Area, also known as the Index, where you selectively prepare and group files using git add to decide what goes into the next snapshot. Third is the Repository, which is the permanent database inside the .git directory where snapshots are stored when you run git commit. This two-step commit process gives developers fine-grained control over creating clean, atomic commits.',
    importantPoints: [
      'Working Directory: Files currently on disk being actively modified',
      'Staging Area (Index): Buffer where file snapshots are queued prior to commit via git add',
      'Repository (.git): Permanent database holding immutable commit objects and trees',
      'Allows crafting atomic commits by selectively staging specific files or chunks (git add -p)',
    ],
    comparisons: [
      {
        aspect: 'Location',
        'Working Directory': 'Local filesystem sandbox (visible files)',
        'Staging Area': 'Internal index binary file at .git/index',
        'Repository': 'Object database in .git/objects and refs',
      },
      {
        aspect: 'Command to Transition',
        'Working -> Staging': 'git add <file>',
        'Staging -> Repo': 'git commit -m "message"',
        'Repo -> Working': 'git checkout / git restore --source',
      },
    ],
    tags: ['git', 'fundamentals', 'staging-area', 'working-directory', 'repository', 'architecture'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'git-fundamentals',
    question: 'How does Git store data internally: snapshots vs delta-based version control?',
    title: 'Git Snapshots vs Delta-Based Version Control Systems',
    answer:
      'Older version control systems (like CVS, Subversion, Perforce) store data as a base file and a series of file-based line differences (**deltas**) over time. Git thinks of its data as a stream of complete **point-in-time snapshots** of a mini filesystem. Every time you commit, Git records a snapshot of what all files look like at that moment; if a file has not changed, Git does not store it again, but simply links to the previously stored identical file.',
    explanation:
      'Because Git stores snapshots linked by SHA hashes rather than calculating deltas on the fly, branching, switching revisions, and comparing historical commits are practically instantaneous local operations.',
    interviewAnswer:
      'Unlike legacy version control tools like SVN which store differences and diff deltas for each file over time, Git stores complete snapshots. When you commit, Git takes a snapshot of your entire project. If a file didn’t change in that commit, Git doesn’t duplicate the file; it simply creates a pointer to the existing file object. This snapshot model is why Git operations like checking out branches, viewing history, and diffing are extraordinarily fast.',
    importantPoints: [
      'Legacy VCS (SVN, CVS): Stores initial file + delta diffs over time (delta-based)',
      'Git: Stores complete filesystem snapshots at every commit point',
      'Deduplication: Unchanged files in a commit reuse existing blob pointers (no disk waste)',
      'Enables near-instantaneous local branching and commit checkouts',
    ],
    tags: ['git', 'fundamentals', 'snapshots', 'deltas', 'svn', 'version-control'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'git-fundamentals',
    question: 'What is the Git Object Model, and what are the roles of Blobs, Trees, Commits, and Annotated Tags in the .git/objects database?',
    title: 'The Git Object Model: Blobs, Trees, Commits, and Cryptographic Hashes',
    answer:
      'Git is an immutable content-addressable key-value database stored in `.git/objects`, where keys are 40-character SHA-1 (or SHA-256) hashes. It has four core object types: 1) **Blob**: Stores pure raw file contents (excluding filename and permissions). 2) **Tree**: Represents a directory, storing a list of filenames, modes, and SHA pointers to child blobs or subtrees. 3) **Commit**: Stores top-level root tree SHA, parent commit SHAs, author/committer timestamps, and commit message. 4) **Annotated Tag**: A permanent pointer to a specific commit with a tagger name, date, and message.',
    explanation:
      'Because commit SHAs are calculated from their content, author, timestamp, AND parent commit SHA, history is cryptographically linked like a Merkle tree. Modifying any historical commit changes its SHA and cascades forward, making historical tampering immediately detectable.',
    interviewAnswer:
      'At its core, Git is a content-addressable key-value store. The keys are 40-character SHA hashes of the object contents. There are four fundamental object types: Blobs, which hold raw file data without filenames; Trees, which represent directories and map filenames to blob or subtree hashes; Commits, which store a pointer to the root tree, parent commit hashes, author info, and message; and Annotated Tags, which point to a specific commit with a signed tag message. Because each commit includes its parent hash, Git forms an immutable Merkle Directed Acyclic Graph (DAG).',
    importantPoints: [
      'Content-Addressable: Object hash is generated by hashing (type + size + null byte + content)',
      'Blob = Raw file data; Tree = Directory structure & filenames; Commit = Snapshot metadata & parent link',
      'Merkle DAG: Cryptographic chain where altering any past commit invalidates all subsequent child commit hashes',
      'Git branches and tags are merely lightweight 41-byte text files containing an object SHA',
    ],
    tags: ['git', 'fundamentals', 'git-internals', 'blobs', 'trees', 'merkle-dag', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 2. Commits (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'commits',
    question: 'What makes an "Atomic Commit", and why is the Conventional Commits specification important for team collaboration?',
    title: 'Atomic Commits and the Conventional Commits Specification',
    answer:
      'An **Atomic Commit** encapsulates a single, cohesive, logical unit of work (one bug fix, one feature, or one refactor) that leaves the codebase in a working, compilable state with passing tests. **Conventional Commits** provides a lightweight standardized convention for commit messages (`feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`), allowing automated Semantic Versioning (SemVer) and changelog generation.',
    explanation:
      'Bundling unrelated changes (e.g. fixing a login bug AND redesigning the checkout page in one commit) makes code review painful and prevents safe cherry-picking or reverting if the feature breaks in production.',
    interviewAnswer:
      'An atomic commit means doing one thing and doing it completely. It shouldn’t mix a feature with an unrelated bug fix or formatting changes, and it should always leave the build and tests passing. Conventional Commits standardizes commit messages using structured prefixes like feat, fix, and chore. This creates a readable git history, makes code reviews easier, and enables automated tooling to bump semantic versions and generate release changelogs automatically.',
    importantPoints: [
      'Atomic commit: A single logical change that passes all tests and does not break the build',
      'Enables clean git revert and cherry-pick without dragging in unrelated code',
      'Conventional Commits format: <type>[optional scope]: <description>',
      'Common types: feat (MINOR release), fix (PATCH release), feat! or BREAKING CHANGE (MAJOR release)',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Conventional Commit Examples',
        code: `# New feature (triggers minor semver bump)
git commit -m "feat(auth): implement JWT refresh token rotation"

# Bug fix (triggers patch semver bump)
git commit -m "fix(payment): prevent duplicate checkout charge on double-click"

# Breaking API change (triggers major semver bump)
git commit -m "feat(api)!: migrate v1 endpoints to REST v2 schema"`,
      },
    ],
    tags: ['git', 'commits', 'atomic-commits', 'conventional-commits', 'best-practices'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'commits',
    question: 'How does git commit --amend work, and what are the dangers of amending a commit that has already been pushed to a shared remote branch?',
    title: 'Amending Commits (git commit --amend) and Remote Branch Hazards',
    answer:
      '`git commit --amend` combines staged changes with the most recent commit instead of creating an entirely new commit object. It replaces the previous commit with a brand new commit that has a completely new SHA hash. If the original commit was already pushed to a shared remote repository, pushing the amended commit requires a force push (`--force`), which overwrites history and breaks the git tree for all collaborators.',
    explanation:
      'When collaborators pull after a forced push, their local branch still contains the old commit SHA, leading to duplicate commits, merge conflicts, and lost work. Never amend commits that have been pushed to shared branches like `main` or `develop`.',
    interviewAnswer:
      'git commit --amend takes whatever is currently in your staging area and combines it with the previous commit, allowing you to fix a typo or add a forgotten file. However, amending doesn’t actually edit the commit—it creates a completely new commit object with a new SHA hash. If you already pushed that commit to a remote branch shared with other teammates, amending requires a force push, which overwrites remote history and causes diverging branches and headache for everyone else.',
    importantPoints: [
      'Replaces previous commit with a newly created commit object with a new SHA hash',
      'Can update both staged files and the commit message: git commit --amend -m "new message"',
      'Safe ONLY on private, un-pushed local branches',
      'Never amend or force-push commits that have been published to shared team branches',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Adding a Forgotten File to Previous Commit',
        code: `# You made a commit, but forgot to include config.json
git add config.json

# Amends the last commit without changing its commit message
git commit --amend --no-edit`,
      },
    ],
    tags: ['git', 'commits', 'amend', 'force-push', 'history', 'troubleshooting'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 3. Branches (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'branches',
    question: 'What is a Git branch under the hood, and what does the HEAD pointer represent?',
    title: 'Git Branch Mechanics: References (.git/refs/heads) and the HEAD Pointer',
    answer:
      'Under the hood, a Git branch is not an expensive copy of files, but a simple 41-byte text file located in `.git/refs/heads/<branch-name>` containing the 40-character SHA-1 hash of the commit it points to. **HEAD** is a special reference (stored in `.git/HEAD`) that points to the currently active branch (or commit) in your working tree.',
    explanation:
      'Creating a branch with `git branch new-feature` simply writes 41 bytes to disk, making branching instantaneous and virtually zero-cost in Git regardless of repository size. Moving HEAD (`git checkout` or `git switch`) updates `.git/HEAD` to point to the new branch.',
    interviewAnswer:
      'In Git, a branch is just a lightweight, movable pointer to a specific commit. Under the hood inside the .git/refs/heads folder, a branch is literally a tiny text file containing a 40-character SHA hash. Creating a branch doesn’t copy any project files, which is why branching in Git is instantaneous. HEAD is a special pointer that indicates which branch or commit you are currently working on in your working directory.',
    importantPoints: [
      'Branch is a lightweight reference file (.git/refs/heads/main) containing a 40-character commit hash',
      'Branch creation is instant (O(1) complexity); does not duplicate project files',
      'HEAD: Pointer to the currently checked-out branch or commit reference',
      'Detached HEAD state occurs when HEAD points directly to a raw commit hash instead of a named branch',
    ],
    tags: ['git', 'branches', 'head', 'refs', 'git-internals', 'fundamentals'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'branches',
    question: 'What are the architectural differences between Git Flow, GitHub Flow, and Trunk-Based Development branching strategies?',
    title: 'Branching Strategies: Git Flow vs GitHub Flow vs Trunk-Based Development',
    answer:
      '**Git Flow** is a strict, scheduled release model using multiple long-lived branches (`main`, `develop`, `feature/*`, `release/*`, `hotfix/*`), best suited for enterprise software with versioned release cycles. **GitHub Flow** is a lightweight, continuous deployment workflow with one long-lived branch (`main`), where short-lived feature branches are opened, reviewed via Pull Request, merged into `main`, and deployed immediately. **Trunk-Based Development** has all developers committing small, frequent batches directly to a single shared trunk (`main`) daily, using Feature Flags to toggle unreleased functionality.',
    explanation:
      'Long-lived feature branches in Git Flow suffer from painful "merge hell". High-performing DevOps teams favor Trunk-Based Development or GitHub Flow because they eliminate merge drift and support Continuous Integration (CI).',
    interviewAnswer:
      'Git Flow is a complex branching model with multiple long-lived branches like main, develop, release, and hotfix, designed for scheduled enterprise releases. GitHub Flow simplifies this dramatically: main is always deployable, developers create short-lived feature branches, submit Pull Requests, and merge straight to main upon approval. Trunk-Based Development goes even further: all developers merge small changes into the trunk daily, using feature flags to hide incomplete work so code is continuously tested and deployed.',
    importantPoints: [
      'Git Flow: Heavyweight, multiple long-lived branches (main, develop, release, hotfix); prone to merge conflicts',
      'GitHub Flow: Simple, agile, PR-driven; feature branches branched off main and merged back to main',
      'Trunk-Based Development: Engineers commit daily directly to main; relies on feature flags and automated CI',
      'Modern high-velocity teams favor Trunk-Based or GitHub Flow to minimize merge debt',
    ],
    comparisons: [
      {
        aspect: 'Long-Lived Branches',
        'Git Flow': 'Two: main and develop',
        'GitHub Flow': 'One: main',
        'Trunk-Based': 'One: trunk (main)',
      },
      {
        aspect: 'Deployment Cadence',
        'Git Flow': 'Scheduled release cycles (sprints/months)',
        'GitHub Flow': 'Continuous delivery per PR merge',
        'Trunk-Based': 'Continuous deployment (multiple times per day)',
      },
      {
        aspect: 'Feature Toggles',
        'Git Flow': 'Rarely used (branches isolate features)',
        'GitHub Flow': 'Optional',
        'Trunk-Based': 'Mandatory (Feature flags hide WIP features in trunk)',
      },
    ],
    tags: ['git', 'branches', 'git-flow', 'github-flow', 'trunk-based', 'devops'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 4. Merging (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'merging',
    question: 'What is the difference between a Fast-Forward Merge and a Three-Way Merge commit in Git?',
    title: 'Fast-Forward Merge vs Three-Way Merge Commit (--no-ff)',
    answer:
      'A **Fast-Forward Merge** occurs when the target branch has no new commits since the feature branch diverged; Git simply moves the target branch pointer forward to point to the latest feature commit without creating a new merge commit. A **Three-Way Merge** occurs when both branches have diverged with independent commits; Git finds their Common Ancestor commit and creates a new **Merge Commit** with two parent pointers to join both histories.',
    explanation:
      'You can prevent fast-forward merges by running `git merge --no-ff`. This always generates an explicit merge commit, preserving historical documentation that a feature branch existed and was merged as an entity.',
    interviewAnswer:
      'A fast-forward merge happens when the base branch has received no new commits since you branched off. Because there are no divergent changes, Git doesn’t create a new commit—it simply fast-forwards the branch pointer to the tip of your feature branch. A three-way merge occurs when both branches have new commits. Git compares the tips of both branches with their common ancestor and generates a new merge commit with two parents. You can force a merge commit even on linear history by using the --no-ff flag.',
    importantPoints: [
      'Fast-Forward: No new commits on base branch; pointer simply advances forward (linear history, no merge commit)',
      'Three-Way Merge: Both branches diverged; Git compares Branch A + Branch B + Common Ancestor',
      'Merge Commit: Special commit object containing two parent SHA pointers',
      '--no-ff flag: Enforces creation of an explicit merge commit to document branch completion',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Forcing a Non-Fast-Forward Merge Commit',
        code: `# Checkout base branch
git checkout main

# Merge feature branch with explicit merge commit
git merge --no-ff feature/user-profile -m "merge: integrate user profile module"`,
      },
    ],
    tags: ['git', 'merging', 'fast-forward', 'three-way-merge', 'no-ff'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'merging',
    question: 'What are Squash Merges, what are their architectural trade-offs, and when should you use or avoid them?',
    title: 'Squash Merging: Clean Linear History vs Granular Commit Loss',
    answer:
      '**Squash Merging** (`git merge --squash`) takes all commits from a feature branch, squashes their changes into a single changeset, and creates one brand-new commit on the target branch without preserving the feature branch’s individual commit history or parent linkage.',
    explanation:
      'Squash merges keep the main branch history clean, concise, and easy to bisect or revert. However, they destroy granular commit history, author attribution for multi-contributor branches, and make future cherry-picking of partial sub-features impossible.',
    interviewAnswer:
      'Squash merging combines all the work from a feature branch into a single commit on the main branch. The major benefit is that it keeps the main branch history clean and readable, squashing dozens of work-in-progress commits like "fix typo" into one clean feature commit. The tradeoff is that you lose the granular step-by-step history and commit context of how the feature was developed, and individual author attributions are lost if multiple engineers committed to the feature branch.',
    importantPoints: [
      'Combines N commits into 1 single commit on target branch',
      'Keeps main branch linear, readable, and easy to revert or bisect',
      'Destroys individual commit messages, intermediate milestones, and multi-author credit',
      'Ideal for small-to-medium PRs; avoid when detailed intermediate commit documentation is legally required',
    ],
    tags: ['git', 'merging', 'squash-merge', 'pull-request', 'history-management'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'merging',
    question: 'How do Git merge strategies work under the hood, and what is the difference between recursive and the modern ort merge strategy?',
    title: 'Git Merge Strategies: Recursive vs Modern ORT Engine',
    answer:
      'A Git merge strategy defines the algorithm used to resolve divergences during a merge. The legacy default was `recursive`. In Git 2.33+, the default is **`ort`** ("Ostensibly Recursive\\\'s Twin"). The `ort` strategy completely rewrites the merge engine to solve performance bottlenecks in massive repositories by: 1) drastically accelerating rename detection, 2) memoizing intermediate conflict results, and 3) operating directly in memory without writing thousands of intermediate conflict files to the working directory.',
    explanation:
      'In criss-cross merge scenarios where two branches share multiple common ancestors, both `recursive` and `ort` construct a virtual common ancestor commit by recursively merging the base ancestors. `ort` performs this in a fraction of the time.',
    interviewAnswer:
      'A merge strategy is the algorithm Git uses to calculate three-way merges. For years, the default was the recursive strategy. Git 2.33 introduced ort, which stands for Ostensibly Recursive’s Twin, as the new default. It produces the exact same merge results as recursive, but is drastically faster on large repositories because it optimizes rename detection, caches conflict calculations, and performs the merge logic in memory rather than writing intermediate conflict files to disk.',
    importantPoints: [
      'ort is the default merge strategy in modern Git (v2.33+)',
      'Drastically faster rename detection on large enterprise codebases',
      'Operates in-memory to prevent disk I/O churn during complex merges',
      'Criss-cross merges: Synthesizes a virtual common ancestor commit to resolve multi-ancestor conflicts',
    ],
    tags: ['git', 'merging', 'merge-strategies', 'ort', 'recursive', 'git-internals', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 5. Rebasing (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'rebasing',
    question: 'What is the fundamental difference between git merge and git rebase when integrating changes from a base branch?',
    title: 'Git Merge vs Git Rebase: Non-Destructive History vs Linear History',
    answer:
      '`git merge` is a **non-destructive** operation that combines divergent histories by creating a new merge commit, preserving the exact chronological sequence and branch topology. `git rebase` **rewrites history** by unwinding your feature branch commits, moving the base of your branch to the tip of the target branch, and re-applying your commits one-by-one as brand-new commits with new SHA hashes, producing a perfectly linear history.',
    explanation:
      'Merging preserves complete historical truth, including all branching diagrams. Rebasing eliminates noisy merge commits and produces a clean linear commit graph, but alters commit hashes and timestamps.',
    interviewAnswer:
      'git merge creates a new merge commit that ties two branches together, preserving the exact history and timeline of both branches without modifying existing commits. git rebase, on the other hand, rewrites history: it temporarily stashes your feature branch commits, pulls the latest commits from the base branch, and replays your commits one-by-one on top. Rebasing produces a completely flat, linear history without merge commits, but it changes all your commit hashes.',
    importantPoints: [
      'git merge: Preserves history, creates merge commit, non-destructive, original commit SHAs unchanged',
      'git rebase: Rewrites history, replays commits linearly on top of target branch, generates new commit SHAs',
      'Rebase creates a clean, linear git log without branching graphs',
      'Merge preserves true chronological context and multiple parent history',
    ],
    comparisons: [
      {
        aspect: 'History Topology',
        'git merge': 'Branching graph with merge commits',
        'git rebase': 'Completely flat, linear line of commits',
      },
      {
        aspect: 'Commit Hashes',
        'git merge': 'Preserved intact',
        'git rebase': 'Rewritten (all rebased commits get new SHA hashes)',
      },
      {
        aspect: 'Traceability',
        'git merge': 'Explicit merge commit documents integration point',
        'git rebase': 'Looks as if work was developed sequentially on latest master',
      },
    ],
    tags: ['git', 'rebasing', 'merge', 'rebase', 'linear-history', 'fundamentals'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'rebasing',
    question: 'How does Interactive Rebasing (git rebase -i) work, and how do you use pick, squash, reword, and drop commands to clean up a branch?',
    title: 'Interactive Rebasing (git rebase -i): Cleaning Local Commit History',
    answer:
      '`git rebase -i <base>` opens an editor listing commits in chronological order (oldest to newest), allowing you to script modifications to your commit history before submitting a pull request. Commands include: **pick** (keep commit as-is), **reword** (keep commit content but edit message), **squash** (meld commit into previous commit and combine messages), **fixup** (meld commit into previous commit discarding message), and **drop** (delete commit entirely).',
    explanation:
      'Interactive rebasing is the primary tool developers use to clean up chaotic local commit logs (fixing typos, squashing WIP commits, removing debug logs) into clean, professional, atomic commits before opening a pull request.',
    interviewAnswer:
      'Interactive rebasing with git rebase -i lets you edit and curate your commit history before publishing your branch. It opens an interactive text editor showing your commits from oldest to newest with commands next to each. You can change "pick" to "reword" to fix a commit message, "squash" to merge multiple commits into one, "fixup" to merge changes while discarding messy commit messages, or "drop" to delete an unwanted commit entirely. It’s the standard way to polish your work before code review.',
    importantPoints: [
      'Interactive rebase list displays commits OLDEST to NEWEST (top to bottom)',
      'pick: Keep commit; squash: Merge into previous commit and edit message',
      'fixup: Merge into previous commit and discard message; drop: Delete commit completely',
      'Allows reordering commits simply by changing the line order in the editor file',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Interactive Rebase Script Example',
        code: `# Rebase last 4 commits
git rebase -i HEAD~4

# --- Git Editor Display ---
pick a1b2c3d feat: implement user model
reword e4f5g6h typo in migration -> change to fix: correct user schema migration
squash i7j8k9l fix lint errors   -> melds into previous commit
drop m0n1o2p debug console.log   -> completely deletes this commit`,
      },
    ],
    tags: ['git', 'rebasing', 'interactive-rebase', 'squash', 'fixup', 'pull-request'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'rebasing',
    question: 'What is the "Golden Rule of Rebasing", and what catastrophic team problems occur when rebasing public shared branches?',
    title: 'The Golden Rule of Rebasing and Public Branch History Rewriting',
    answer:
      'The **Golden Rule of Rebasing** states: **"Never rebase a branch that is shared with other developers (public branches like `main` or `develop`)."** Because rebasing rewrites commit hashes, rebasing a shared branch forces the remote branch to diverge from everyone else’s local copies. Collaborators who pull will have their local history split, leading to duplicate commits, merge conflicts on every subsequent pull, and potential deletion of teammates’ work.',
    explanation:
      'When someone rebases `main` and force-pushes, teammates who pull will see Git attempt to merge their old version of `main` with the rewritten rebased `main`, causing duplicate commits with identical code but different SHA hashes.',
    interviewAnswer:
      'The Golden Rule of Rebasing is simple: Never rebase commits that exist outside your local repository and have been pushed to a shared branch. Rebasing rewrites history by generating brand-new commit hashes. If other teammates have already branched off or pulled those original commits, and you rebase and force push, their local repositories diverge completely. When they pull, Git sees two different versions of every commit, resulting in duplicate commits, horrific merge conflicts, and lost code.',
    importantPoints: [
      'Golden Rule: Rebase local, private branches ONLY; never rebase shared public branches',
      'Rebasing rewrites commit SHA hashes; force-pushing overwrites the remote truth',
      'Teammates who pull face diverging histories, duplicate commits, and merge nightmares',
      'To integrate latest changes on a shared branch, use git merge or rebase only your private feature branch onto main',
    ],
    tags: ['git', 'rebasing', 'golden-rule', 'force-push', 'git-safety'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Scenario Based',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 6. Remote Repositories (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'remote-repositories',
    question: 'What is the difference between git fetch and git pull in Git?',
    title: 'git fetch vs git pull Mechanics',
    answer:
      '`git fetch` communicates with the remote repository and downloads all new commits, branches, and tags into your local `.git` database, updating remote-tracking branches (like `origin/main`), but **does not touch your working directory or active branch**. `git pull` is a composite command: it executes `git fetch` followed immediately by `git merge` (or `git rebase` if configured) to integrate remote changes directly into your current working branch.',
    explanation:
      '`git fetch` is completely safe because it never causes merge conflicts or modifies uncommitted files in your working directory. It allows you to inspect remote changes (`git log origin/main`) before deciding to merge.',
    interviewAnswer:
      'git fetch downloads new commits, branches, and tags from the remote server to your local repository without touching your working directory or changing any of your files. It simply updates your remote-tracking pointers like origin/main. In contrast, git pull does a git fetch and immediately merges those fetched changes into your active branch. Fetch is always safe because it gives you a chance to inspect changes with git diff before merging.',
    importantPoints: [
      'git fetch: Downloads remote objects and updates remote branches (e.g. origin/main); 100% safe, no working tree modifications',
      'git pull = git fetch + git merge (or git rebase if configured with pull.rebase = true)',
      'git fetch allows diffing before merging: git diff main origin/main',
      'Recommended team practice: git fetch followed by git rebase origin/main for clean linear integration',
    ],
    comparisons: [
      {
        aspect: 'Modifies Working Directory?',
        'git fetch': 'No (never changes your working files)',
        'git pull': 'Yes (merges or rebases directly into active branch)',
      },
      {
        aspect: 'Risk of Merge Conflict',
        'git fetch': 'Zero (no merge attempted)',
        'git pull': 'High if remote changes clash with local commits',
      },
    ],
    tags: ['git', 'remote-repositories', 'fetch', 'pull', 'remotes', 'workflow'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'remote-repositories',
    question: 'How do you configure multiple remote repositories (e.g. origin and upstream) when contributing to open source projects via forks?',
    title: 'Managing Multiple Remotes: origin vs upstream in Open Source Forking',
    answer:
      'When contributing to an open source project, you fork the original repository to your personal account. In your local clone, **origin** points to your personal fork (where you have write access to push branches), and **upstream** points to the original central open source repository (where you have read-only access to fetch the latest changes).',
    explanation:
      'To stay synchronized with the main project: 1) add the upstream remote (`git remote add upstream <url>`), 2) fetch changes (`git fetch upstream`), and 3) merge or rebase your local branch (`git rebase upstream/main`).',
    interviewAnswer:
      'In open source forking workflows, you maintain two remotes. origin points to your personal GitHub fork, which is where you push your feature branches. upstream points to the original central project repository. To keep your fork updated with the main project, you run git fetch upstream, and then rebase your local main branch onto upstream/main before pushing the updated main back to your personal origin.',
    importantPoints: [
      'origin: Your personal fork on GitHub/GitLab (read & write access)',
      'upstream: The authoritative central parent repository (read access to fetch latest)',
      'Add upstream: git remote add upstream https://github.com/org/repo.git',
      'Sync workflow: git fetch upstream && git rebase upstream/main',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Open Source Fork Synchronization Workflow',
        code: `# 1. Add upstream remote pointing to central repo
git remote add upstream https://github.com/authoritative-org/project.git

# 2. Fetch the latest changes from the original project
git fetch upstream

# 3. Rebase local main onto upstream's latest main
git checkout main
git rebase upstream/main

# 4. Push updated main to your personal fork
git push origin main`,
      },
    ],
    tags: ['git', 'remote-repositories', 'upstream', 'origin', 'fork', 'open-source'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 7. Conflict Resolution (2 Questions: 1 Junior, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'conflict-resolution',
    question: 'How do you read and resolve a Git merge conflict containing <<<<<<<, =======, and >>>>>>> markers?',
    title: 'Understanding and Resolving Git Merge Conflict Markers',
    answer:
      'A merge conflict occurs when Git cannot automatically reconcile conflicting edits on the exact same lines of code. Git pauses the merge and inserts conflict markers directly into the file: `<<<<<<< HEAD` marks your current active branch’s version, `=======` acts as the divider, and `>>>>>>> <branch>` marks the incoming version from the branch being merged. You resolve it by manually editing the file to the desired code, removing all markers, staging the file (`git add <file>`), and concluding with `git commit`.',
    explanation:
      'Failing to remove the marker lines (`<<<<<<<`, `=======`) causes syntax errors in application code. Modern IDEs (VS Code, JetBrains) provide GUI buttons like "Accept Current", "Accept Incoming", or "Accept Both".',
    interviewAnswer:
      'When Git cannot automatically resolve edits to the same lines across branches, it marks the conflict directly in the file. Everything between <<<<<<< HEAD and ======= is what currently exists on your active branch. Everything between ======= and >>>>>>> is the incoming change from the branch you are merging. To resolve it, you consult with your team, edit the file to keep the correct logic, delete all three marker lines, stage the resolved file with git add, and finalize the merge with git commit.',
    importantPoints: [
      '<<<<<<< HEAD: Indicates start of your current local branch changes',
      '=======: Center divider separating the two competing versions',
      '>>>>>>> [branch-name]: Indicates end of incoming branch changes',
      'Resolution workflow: Edit file -> Delete markers -> git add <file> -> git commit',
    ],
    codeExamples: [
      {
        language: 'typescript',
        title: 'Conflict Markers in Code',
        code: `<<<<<<< HEAD
// Your current local branch version
const API_URL = 'https://api.staging.example.com';
=======
// Incoming version from main branch
const API_URL = 'https://api.v2.example.com';
>>>>>>> main

// RESOLUTION: Choose or combine correct logic and delete all markers:
const API_URL = 'https://api.v2.example.com';`,
      },
    ],
    tags: ['git', 'conflict-resolution', 'merge-conflicts', 'conflict-markers', 'fundamentals'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'conflict-resolution',
    question: 'How does git rerere (Reuse Recorded Resolution) work, and how does it automate recurring merge conflicts during long-lived branch rebasing?',
    title: 'Automating Conflict Replay with git rerere (Reuse Recorded Resolution)',
    answer:
      '`git rerere` stands for **Reuse Recorded Resolution**. When enabled (`git config --global rerere.enabled true`), Git records how you manually resolve conflict hunks in a local cache. If the exact same merge conflict hunk is encountered again later (e.g. rebasing a long-lived feature branch with 20 commits, or testing a topic branch across multiple integration branches), Git automatically applies your previous resolution without human intervention.',
    explanation:
      'Without `rerere`, rebasing a feature branch across diverged commits forces you to resolve the identical conflict on every single rebased commit step. `rerere` remembers the resolution on step 1 and auto-applies it across subsequent steps.',
    interviewAnswer:
      'git rerere stands for Reuse Recorded Resolution. When you enable it, Git caches how you resolve merge conflicts. If you encounter the exact same conflict hunk in the future—which happens constantly when rebasing long-lived branches across multiple commits—Git remembers your resolution and automatically applies it for you. This saves huge amounts of time and prevents human errors when repeatedly resolving identical conflicts during rebasing.',
    importantPoints: [
      'Enable globally: git config --global rerere.enabled true',
      'Caches preimage (conflict) and postimage (your resolution) in .git/rr-cache',
      'Automatically auto-resolves identical conflict hunks during multi-step rebases',
      'Massive productivity booster when rebasing feature branches that touch core architectural files',
    ],
    tags: ['git', 'conflict-resolution', 'rerere', 'rebasing', 'automation', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 8. Stashing (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'stashing',
    question: 'How does git stash work, and what is the difference between git stash pop and git stash apply?',
    title: 'Git Stash Mechanics: git stash pop vs git stash apply',
    answer:
      '`git stash` temporarily shelves (shelters) uncommitted modifications in your working directory and staging area, reverting your working copy to the clean `HEAD` commit so you can switch branches or pull emergency fixes. `git stash pop` applies the most recent stashed state and **removes it from the stash list**. `git stash apply` applies the stashed state but **keeps the stash entry intact in the stash list** for reuse.',
    explanation:
      'Use `git stash apply` when you want to apply the same stashed changes across multiple different branches (e.g. a temporary configuration or test harness).',
    interviewAnswer:
      'git stash takes your dirty uncommitted changes—both staged and unstaged—and saves them to an internal stack, restoring your working directory to a clean state so you can switch branches or pull updates. The difference between pop and apply is that git stash pop applies the changes and immediately deletes that entry from the stash stack. git stash apply applies the changes to your working tree but preserves the stash entry on the stack, which is useful if you want to test those same stashed changes across multiple branches.',
    importantPoints: [
      'git stash: Shelves uncommitted tracked changes; restores working tree to clean HEAD state',
      'git stash pop: Applies stash@{0} and deletes it from the stash stack',
      'git stash apply: Applies stash@{0} but retains the entry in the stash list',
      'git stash list: Inspects all stored stashes; git stash drop removes a specific stash entry',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Stash Usage Example',
        code: `# Save work-in-progress with a descriptive label
git stash push -m "WIP: stripe checkout form integration"

# View stored stashes
git stash list

# Apply stash and drop from list
git stash pop

# Or apply while keeping it in stash list for another branch
git stash apply stash@{0}`,
      },
    ],
    tags: ['git', 'stashing', 'stash-pop', 'stash-apply', 'workflow'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'stashing',
    question: 'How do you stash untracked and ignored files in Git using -u (or -a), and how can you convert a stash into a new branch?',
    title: 'Stashing Untracked Files (git stash -u) and Stash Branching',
    answer:
      'By default, `git stash` ignores newly created untracked files and `.gitignore` files. To stash untracked files alongside tracked modifications, pass the `-u` (or `--include-untracked`) flag. To stash everything including ignored build artifacts, pass `-a` (`--all`). If applying a stash causes severe merge conflicts with recent branch updates, `git stash branch <new-branch>` creates a new branch starting from the exact commit where the stash was created and pops the stash cleanly without conflict.',
    explanation:
      'Developers often get confused when running `git stash` and noticing newly added files remain in the working directory. Remembering `-u` is an essential day-to-day command.',
    interviewAnswer:
      'By default, git stash only captures modified files that are already tracked by Git. If you added brand-new files that haven’t been tracked yet, they will be left behind in your working folder. To stash untracked files too, use git stash -u. If your stashed changes later conflict heavily when you try to pop them onto an updated branch, you can run git stash branch <branch-name>, which checks out the exact commit the stash was originally based on, creates a new branch, and pops the stash with zero conflicts.',
    importantPoints: [
      'Default git stash skips untracked files entirely',
      'git stash -u (--include-untracked): Captures newly created untracked files',
      'git stash -a (--all): Captures untracked and .gitignore ignored files',
      'git stash branch <name>: Checks out original base commit, creates branch, and pops stash cleanly',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Stashing Untracked Files & Branching',
        code: `# Stash everything including new untracked files
git stash push -u -m "New component and tests"

# If popping creates conflicts, recover cleanly into a fresh branch:
git stash branch feature/recovered-work stash@{0}`,
      },
    ],
    tags: ['git', 'stashing', 'untracked-files', 'stash-branch', 'troubleshooting'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 9. Reset & Revert (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'reset-revert',
    question: 'What is the difference between git reset --soft, git reset --mixed, and git reset --hard?',
    title: 'Git Reset Modes: --soft vs --mixed vs --hard',
    answer:
      '`git reset <commit>` moves the current branch HEAD backward to the specified commit. 1) **--soft**: Moves HEAD only; leaves the Staging Area (Index) and Working Directory completely untouched (all changes remain staged). 2) **--mixed** (default): Moves HEAD and resets the Staging Area; leaves Working Directory untouched (changes remain unstaged). 3) **--hard**: Moves HEAD, resets the Staging Area, AND overwrites the Working Directory, permanently discarding all uncommitted code.',
    explanation:
      '`--soft` is ideal for undoing a commit while keeping code staged for revision. `--hard` is dangerous because uncommitted changes in your working directory are wiped out and cannot be recovered via Git.',
    interviewAnswer:
      'All three git reset flags move the HEAD pointer backward to an earlier commit, but they treat your files differently. --soft moves HEAD back but leaves your files staged in the index, which is great if you want to redo a commit. --mixed, which is the default, moves HEAD back and un-stages your files, leaving your changes in the working directory as unstaged edits. --hard moves HEAD back and completely wipes your staging area and working directory, deleting all uncommitted code. --hard should be used with extreme caution.',
    importantPoints: [
      '--soft: Moves HEAD pointer only; all changes remain staged in the index',
      '--mixed (default): Moves HEAD and resets index; changes remain in working directory as unstaged modifications',
      '--hard: Moves HEAD, clears index, and overwrites working tree (uncommitted work is permanently lost)',
      'Never run git reset --hard if you have uncommitted work you might need',
    ],
    comparisons: [
      {
        aspect: 'HEAD Moved?',
        '--soft': 'Yes',
        '--mixed (default)': 'Yes',
        '--hard': 'Yes',
      },
      {
        aspect: 'Staging Area Reset?',
        '--soft': 'No (remains staged)',
        '--mixed (default)': 'Yes (un-staged)',
        '--hard': 'Yes (discarded)',
      },
      {
        aspect: 'Working Directory Reset?',
        '--soft': 'No (untouched)',
        '--mixed (default)': 'No (untouched)',
        '--hard': 'Yes (OVERWRITTEN / LOST)',
      },
    ],
    tags: ['git', 'reset-revert', 'git-reset', 'soft', 'mixed', 'hard', 'safety'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'reset-revert',
    question: 'Why is git revert preferred over git reset when undoing changes on shared remote branches?',
    title: 'git revert vs git reset: Safe Public History Rollbacks',
    answer:
      '`git reset` deletes or rewinds commits from branch history, requiring a dangerous force-push (`--force`) on remote branches. `git revert <commit>` does **not** alter history; instead, it generates a brand-new commit that applies the exact inverse mathematical diff of the targeted commit, cleanly neutralizing the unwanted code while preserving linear history.',
    explanation:
      'Because `git revert` only moves history forward by appending a new commit, it can be safely pushed to shared production branches (`main`) without disrupting teammates or breaking CI/CD deployment pipelines.',
    interviewAnswer:
      'When you need to undo a commit that has already been pushed to a shared remote branch, you should always use git revert instead of git reset. git reset removes commits from the history, requiring a force push that breaks history for teammates. In contrast, git revert does not delete anything; it creates a brand-new commit that introduces the exact opposite changes of the faulty commit. Because it is purely forward-moving, you can push it normally without force-pushing, keeping the team’s git history completely intact.',
    importantPoints: [
      'git revert: Creates a new commit that inverts the changes of a target commit (forward-only history)',
      'git reset: Rewinds branch pointer and erases commits from current branch (requires force push)',
      'Safe for shared branches: git revert requires no force-push and causes zero divergence for teammates',
      'Reverting merge commits requires specifying the parent mainline number (-m 1)',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Reverting a Faulty Commit',
        code: `# Safely reverts the commit and auto-creates a "Revert '...' commit"
git revert a1b2c3d

# Push cleanly to shared production branch without --force
git push origin main`,
      },
    ],
    tags: ['git', 'reset-revert', 'git-revert', 'git-reset', 'production-safety'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'reset-revert',
    question: 'How do you recover seemingly lost commits, accidental hard resets, or deleted branches using git reflog?',
    title: 'Disaster Recovery with git reflog and the Reference Log',
    answer:
      'The **Reference Log (`git reflog`)** is a local diary that records every single change of the `HEAD` pointer (commits, branch switches, resets, merges, rebases, amends). Even if you run `git reset --hard` or delete a local branch (`git branch -D`), the commits remain in the `.git/objects` database until garbage collected (typically 30–90 days). You run `git reflog`, identify the commit SHA right before the disaster, and restore your branch to it using `git reset --hard HEAD@{n}` or `git checkout -b <new-branch> <SHA>`.',
    explanation:
      'Because Git almost never deletes committed data immediately, `reflog` is the ultimate safety net for software engineers. Note that `git reflog` is local to your machine and is not shared when pushing to remotes.',
    interviewAnswer:
      'git reflog is Git’s internal flight recorder. It tracks every time your local HEAD pointer moved, whether by committing, checking out branches, rebasing, or resetting. If you accidentally run git reset --hard and lose five commits, they aren’t actually gone—they are still in Git’s object database. By running git reflog, you can find the commit hash right before the reset occurred, and then restore your work by running git reset --hard to that reflog entry or creating a new branch from that hash.',
    importantPoints: [
      'reflog records every HEAD movement locally in .git/logs/HEAD',
      'Accidentally deleted commits remain intact on disk for ~30-90 days until git gc runs',
      'Recovery: Run git reflog -> find commit before mistake (e.g. HEAD@{2}) -> git branch recovery-branch HEAD@{2}',
      'Cannot recover uncommitted changes that were wiped out by a hard reset (only committed objects are in reflog)',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Emergency Recovery Workflow with git reflog',
        code: `# 1. Accidental disaster: you ran git reset --hard HEAD~3 and lost work!
# 2. Inspect reflog to find where HEAD was before the reset:
git reflog
# Output:
# 3f2a1b0 HEAD@{0}: reset: moving to HEAD~3
# 8c9d0e1 HEAD@{1}: commit: add payment processor implementation (HERE IS OUR WORK!)

# 3. Restore your branch back to that commit:
git reset --hard HEAD@{1}`,
      },
    ],
    tags: ['git', 'reset-revert', 'reflog', 'disaster-recovery', 'git-internals', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Troubleshooting',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 10. Git Best Practices (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'git',
    topicSlug: 'git-best-practices',
    question: 'How do .gitignore pattern rules work, and how do you remove sensitive files that were accidentally tracked and committed?',
    title: '.gitignore Pattern Matching and Untracking Cached Files (git rm --cached)',
    answer:
      '`.gitignore` specifies intentionally untracked files that Git should ignore (e.g. `node_modules/`, `.env`, build artifacts). Patterns support wildcards (`*`), directory exclusion (`build/`), and negation (`!important.log`). If a file (like `.env`) was already committed to Git before being added to `.gitignore`, Git **continues tracking it**. You must untrack it from the Git index without deleting your local copy using `git rm --cached <file>`.',
    explanation:
      'Simply adding `.env` to `.gitignore` after committing it does nothing because `.gitignore` only applies to untracked files. Running `git rm --cached .env` tells Git to stop tracking the file while keeping it on your local disk.',
    interviewAnswer:
      'A common gotcha is adding a file like .env to .gitignore, only to find that Git keeps tracking its changes. This happens because .gitignore only prevents untracked files from being staged; if a file has already been committed once, Git continues tracking it. To fix this, you run git rm --cached followed by the filename. This deletes the file from Git’s staging index and commit history while safely keeping the actual file on your local disk.',
    importantPoints: [
      '.gitignore patterns apply ONLY to untracked files (already-tracked files ignore .gitignore)',
      'git rm --cached <file>: Removes file from Git index/tracking while preserving local copy on disk',
      'Never commit API keys, secrets, or .env files; use environment variables and secret vaults',
      'If secrets are pushed to a public remote, consider them compromised immediately and rotate keys',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Untracking Accidental Sensitive Files',
        code: `# 1. Add .env to .gitignore
echo ".env" >> .gitignore

# 2. Untrack .env from Git without deleting it locally
git rm --cached .env

# 3. Commit the removal
git add .gitignore
git commit -m "chore: stop tracking local .env credentials"`,
      },
    ],
    tags: ['git', 'git-best-practices', 'gitignore', 'git-rm-cached', 'security', 'secrets'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'git-best-practices',
    question: 'How do Git Hooks (pre-commit, commit-msg, Husky) enforce code quality, linting, and commit conventions before code leaves a developer’s machine?',
    title: 'Git Hooks and Automated Quality Gateways (Husky / lint-staged)',
    answer:
      '**Git Hooks** are executable scripts stored in `.git/hooks/` that run automatically when specific Git events occur. 1) **pre-commit** executes before a commit is created, running linters (ESLint, Prettier) and unit tests via tools like `lint-staged`. If checks fail, the commit is aborted. 2) **commit-msg** validates the commit message against Conventional Commits standards. 3) **pre-push** runs integration tests before pushing to remotes.',
    explanation:
      'Because `.git/hooks/` is not tracked by Git, teams use tools like **Husky** to configure hooks inside the repository (e.g. `.husky/`), automatically installing them on `npm install` across all team developer machines.',
    interviewAnswer:
      'Git hooks are custom scripts triggered at key points in the Git workflow. For example, a pre-commit hook can run linters and formatting checks on only the staged files before allowing a commit to be created. A commit-msg hook can enforce Conventional Commits syntax like feat and fix prefixes. Because the .git/hooks directory is not committed to the repository, teams use tools like Husky and lint-staged to configure these hooks in version control so every engineer on the team automatically runs the same checks before committing.',
    importantPoints: [
      'pre-commit: Runs linters, formatters, and typechecks; aborts commit if exit code != 0',
      'commit-msg: Enforces commit message standards (commitlint)',
      'lint-staged: Runs linters strictly on staged files for fast 1-second pre-commit checks',
      'Husky: Manages and shares Git hooks in team repository via package.json / .husky/',
    ],
    codeExamples: [
      {
        language: 'json',
        title: 'lint-staged Configuration in package.json',
        code: `// package.json
{
  "lint-staged": {
    "*.{ts,tsx,js}": [
      "prettier --write",
      "eslint --fix"
    ]
  }
}`,
      },
    ],
    tags: ['git', 'git-best-practices', 'git-hooks', 'husky', 'lint-staged', 'ci-cd'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'git',
    topicSlug: 'git-best-practices',
    question: 'How does git bisect use Binary Search to pinpoint the exact commit that introduced a production bug or performance regression?',
    title: 'Automated Binary Search Regression Debugging with git bisect',
    answer:
      '`git bisect` is a debugging tool that uses a **Binary Search algorithm** across commit history to locate the exact commit that introduced a bug. You give it a known "bad" commit (usually current HEAD) and a known "good" commit from the past. Git checks out the midpoint commit. You test the app and mark the commit as `good` or `bad`. Git halves the search space repeatedly, finding the faulty commit in $O(\\log N)$ steps (e.g. searching 1,000 commits takes only ~10 tests).',
    explanation:
      '`git bisect run <test-script>` fully automates the process: it runs an automated test script on each midpoint commit, checks the exit code (0 for good, 1 for bad), and pinpoints the regression in seconds without human intervention.',
    interviewAnswer:
      'git bisect uses binary search to quickly isolate which commit introduced a bug. You tell Git a known good commit where everything worked, and a known bad commit where the bug appears. Git checks out the middle commit in between. You test your app and type git bisect good or git bisect bad, and Git cuts the remaining commit range in half. In a project with 1,000 commits, it finds the culprit in only about 10 steps. Even better, you can run git bisect run with an automated test command, and Git will binary-search the entire history automatically.',
    importantPoints: [
      'Employs binary search to find offending commit in O(log N) steps',
      'git bisect start -> git bisect bad HEAD -> git bisect good <commit-hash>',
      'git bisect run <script>: Completely automates bisecting using an automated test command',
      'Conclude bisecting with git bisect reset to return to your original branch state',
    ],
    codeExamples: [
      {
        language: 'bash',
        title: 'Automated git bisect with Jest Test',
        code: `# Start bisect session
git bisect start
git bisect bad HEAD
git bisect good v2.4.0

# Automatically run npm test on each midpoint until culprit is found!
git bisect run npm test -- tests/auth.test.ts

# Output: "a1b2c3d4 is the first bad commit"
git bisect reset`,
      },
    ],
    tags: ['git', 'git-best-practices', 'git-bisect', 'debugging', 'binary-search', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Troubleshooting',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
];
