const fs = require('node:fs');
const path = require('node:path');

const filepath = path.join(process.cwd(), 'hello.txt');

const contents = fs.readFileSync(filepath, 'utf8');
console.log('File Contents:', contents);
const upperContents = contents.toUpperCase();
fs.writeFileSync(filepath, upperContents);
console.log('File updated.');
