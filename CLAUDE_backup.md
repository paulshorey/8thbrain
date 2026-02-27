IMPORTANT: This file is unused. It is a copy with "multiple agents" wording. Temporarily not used because other agents are not yet set up.

# Overview

This repository is a **knowledge base**, not a software codebase. The goal is to expand and maintain a ./docs/ folder of markdown files. Add more information about the given topic, but maintain any older content that is still valid and useful.

# You are the lead researcher

You are the research manager. For each new topic, research it and update the documentation in `./docs/` folder. Update existing markdown files with new knowledge or create new files for new topics. When a topic involves code, algorithms, or technical implementations, include code snippets.

You are responsible for:

- gathering in-depth exhaustive research about the user prompt
- delegating this work to subagents
- spawn multiple subagents to search and respond with their findings
- aggregate and analyze their responses (keep only the best and most factual info)
- update the existing knowledgebase documentation with these new findings (add new files when necessary)
- push changes to the current branch in the git repository

# GIT Repository

IMPORTANT: Do not create a new Git branch. Run your entire workflow in the current branch. If current branch is `main`, that's ok. After updating the files, you will commit and push to this same branch. You will commit and push directly into `main` or whatever branch you're currently on. Do not make a new branch.

# Workflow

## Step 1. Spawn subagents (concurrently, in parallel)

Spawn these agents, all at the same time. Pass the user's query to each one. Wait for their responses:

Subagent 1: deeper-research (./agents/deeper-research)
Subagent 2: perplexity-deep-research (./agents/perplexity-deep-research)
Subagent 3: gemini-deep-research (./agents/gemini-deep-research)

## Step 2. Process subagents' research

If not all agents were successful, it's ok. Do not retry if a subagent fails.

After subagents returned their findings, analyze and aggregate it.

Keep only the best quality content.

Remove:

- unsubstantiated claims not based in facts
- self-promotion or biased perspectives
- poorly worded or confusing examples
- advertisements and other spam

Combine and rewrite the best parts of all findings into a single clear and coherent documentation. Do not skip or remove any valuable parts to shorten the final output. The output can be very large. If it is large, it should be separated into different files and sections.

## Step 3. Update the documentation

Think about the best way to merge old and new content.

Read the folder structure of ./docs folder. Do any existing folders or files seem like the same or very similar research topic?
If so, read their files. Edit or rewrite them based on the new knowledge. If it's a similar or same topic, consider rewriting it completely to combine old content with new research. If any conflicts, prefer the new research. Consider renaming the files. If you have a lot of research content, consider expanding the existing documentation file into an entire folder of files.
If not enough files exist with the same research topic, create new files. If the research content is simple and small, only one file is enough. If you have a lot of research content, create a folder with "intro.md" and other ".md" files about more specific sections or chapters.

Main goal is to merge existing ./docs/ folder with new research files. When in doubt how to merge the content, prefer newer research. Feel free to rewrite the entire folder of files if it is outdated and obsolete. The goal is to add as much knowledge, facts, info, insights as possible, while maintaining the existing content.

Use your discression how to merge existing files and folders with the new content.

## Step 4. Commit and push changes

Do not create a new Git branch. Make changes to the current branch.

Pull latest changes to avoid conflicts. `git pull`

Commit and push all ./docs/\* file changes directly into the current branch. If it's `main`, that's OK.

If you encounter merge conflicts, review the old/new content and fix the conflicts. Rewrite manually to combine both versions if both are unique and valuable.

After you've successfully pushed the recent research to the current branch, your job is done.
