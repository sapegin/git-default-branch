const fs = require('fs');
const path = require('path');

const getDefaultValue = () => {
	const filename = path.resolve(process.cwd(), '.git/config');
	try {
		return fs.readFileSync(filename, 'utf8');
	} catch (err) {
		return '';
	}
};

module.exports = (config = getDefaultValue()) => {
	if (!config) {
		return '';
	}

	if (config.includes('[branch "main"]')) {
		return 'main';
	}
	if (config.includes('[branch "master"]')) {
		return 'master';
	}

	return '';
};
