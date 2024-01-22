const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');
const newFile = fs.createWriteStream('./newFile.txt');

rs.map((chunk) => chunk.toString().toUpperCase()).pipe(newFile);