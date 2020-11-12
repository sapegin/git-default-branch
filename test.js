const gitDefaultBranch = require('./index');

test('reads a value from a file', () => {
	const result = gitDefaultBranch();
	expect(result).toBe('main');
});

test('reads a value from a variable', () => {
	const result = gitDefaultBranch(`
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
	ignorecase = true
	precomposeunicode = true
[remote "origin"]
	url = git@github.com:sapegin/antbear.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
	`);
	expect(result).toBe('master');
});
