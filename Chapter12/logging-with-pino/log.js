const pino = require('pino');
const logger = pino({
  level: 'debug'
});

logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.debug('This is a debug message');
