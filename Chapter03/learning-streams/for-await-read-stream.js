const fs = require('node:fs');

const rs = fs.createReadStream('./file.txt');

async function run () {
  for await (const chunk of rs) {
    console.log('Read chunk:', chunk.toString());
  }
  console.log('No more data.');
}

run();
