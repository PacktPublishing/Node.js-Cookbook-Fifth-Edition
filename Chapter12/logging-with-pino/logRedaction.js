const logger = pino({
  redact: ['user.password', 'user.creditCardNumber']
});

logger.info({
  user: {
    name: 'Jane Doe',
    password: 'secret',
    ip: '192.168.1.1'
  }
}, 'User login');
