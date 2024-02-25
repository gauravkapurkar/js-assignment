const fs = require('fs');
const path = require('path');

const fileList = function(dir) {
	return fs.readdirSync(dir).reduce((list, file) => {
		const name = path.join(dir, file);
		const isDir = fs.statSync(name).isDirectory();
		return list.concat(isDir ? fileList(name) : [name]);
	}, []);
};

module.exports = {
	fileList
};
