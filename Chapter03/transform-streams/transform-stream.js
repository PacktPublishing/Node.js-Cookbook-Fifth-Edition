const fs = require('node:fs');

const { Transform } = require('node:stream');
const rs = fs.createReadStream('./file.txt');

const newFile = fs.createWriteStream('./newFile.txt');

const uppercase = new Transform({
  transform (chunk, encoding, callback) {
    // Data processing
    callback(null, chunk.toString().toUpperCase());
  }
});

rs.pipe(uppercase).pipe(newFile);
