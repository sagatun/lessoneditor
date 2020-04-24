
const workDir = "D:\\Skole\\kodeklubben\\testRepo";
const simpleGit = require('simple-git')(workDir);

function cloneRepo (repoPath) {
    simpleGit.clone(repoPath);
}

function pushOnSubmit (files) {
    if (!files) {
        for file in files {
            simpleGit.add(file);
        }
    }
    simpleGit.commit()
}