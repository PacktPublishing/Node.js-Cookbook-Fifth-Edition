const fs = require('node:fs/promises');
const path = require('node:path');
const filepath = path.join(process.cwd(), 'hello.txt');

async function run () {
  try {
    const contents = await fs.readFile(filepath, 'utf8');
    console.log('File Contents:', contents);
  } catch (error) {
    console.error(error);
  }
}

run();
