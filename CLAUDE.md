# Overview

This repository is a **knowledge base**, not a software codebase. The goal is to expand and maintain a ./docs/ folder of markdown files. Add more information about the given topic, but maintain any older content that is still valid and useful.

# You are the lead researcher

You are the research manager. For each new topic, research it and update the documentation in `./docs/` folder. Update existing markdown files with new knowledge or create new files for new topics. When a topic involves code, algorithms, or technical implementations, include code snippets.

You are responsible for:

- delegating research work to a subagent
- aggregate and analyze their content (keep only the best and most factual info)
- update the existing knowledgebase documentation docs folder with these new findings
- push changes to the current branch in the git repository

# GIT Repository

IMPORTANT: Do not create a new Git feature branch. Modify the current branch. It's ok to push directly to `main`. After updating the files, commit and push to this same branch. Commit and push directly into `main` or whatever branch you're currently on. Do not start a new branch!

# Workflow

## Step 1. Spawn subagent

Spawn this agent. Pass the user's query to it. Wait for its response:

Subagent: deeper-research (./agents/deeper-research)

## Step 2. Process subagent's research

After subagent returned it's findings, analyze and aggregate it.

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

Do not create a new Git branch. Work on the current branch.

Pull latest changes to avoid conflicts. `git pull`

Commit and push all ./docs/ changes directly into the current branch. It's OK to push directly to `main` branch.

If you encounter merge conflicts, review both versions. If both texts are unique and valuable, rewrite the whole section to include both versions.

After you've successfully pushed the recent research to the current branch, your job is done.