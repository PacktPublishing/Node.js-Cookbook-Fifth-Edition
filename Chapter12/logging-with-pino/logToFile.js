const fs = require('node:fs');
const pino = require('pino');
const stream = fs.createWriteStream('app.log');
const logger = pino(stream);
logger.info('This is an info message');
