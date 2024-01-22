const fs = require('node:fs');
const file = fs.createWriteStream('./file.txt');

for (let i = 0; i <= 100000; i++) {
  file.write(
    "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n"
  );
}
