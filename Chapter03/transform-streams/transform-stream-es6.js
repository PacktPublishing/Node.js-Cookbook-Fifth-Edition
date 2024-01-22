const fs = require('node:fs');
const { Transform } = require('node:stream');

const rs = fs.createReadStream('./file.txt');
const newFile = fs.createWriteStream('./newFile.txt');

class Uppercase extends Transform {
  _transform (chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

rs.pipe(new Uppercase()).pipe(newFile);
