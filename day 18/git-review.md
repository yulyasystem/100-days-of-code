## git squashing commits

`git cherry -v master` shows how many commits were added comparing to _master_
to rewrite history from number of commits (HEAD~numberOfCommits) use `git rebase -i HEAD~numberOfCommits`
`-i` stands for interactive mode

`git rebase idOfCommit..idOfEndCommit onto idOfCommit` -> use first commit and squash other to it, to push such changes use `git push --force`

`git rebase branch` put together all commits by creation date, branch is blended into master