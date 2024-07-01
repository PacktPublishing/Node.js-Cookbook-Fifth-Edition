const fastify = require('fastify')({ logger: true });
const path = require('path');
const pointOfView = require('@fastify/view');
const fastifyFormbody = require('@fastify/formbody');
const fastifyCookie = require('@fastify/cookie');
const fastifySession = require('@fastify/session');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

fastify.register(fastifyFormbody);

fastify.register(pointOfView, {
  engine: {
    ejs: require('ejs')
  },
  root: path.join(__dirname, 'views')
});

fastify.register(fastifyCookie);
fastify.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  cookie: {
    httpOnly: true
  },
  saveUninitialized: false,
  resave: false
});

fastify.register(indexRoutes);
fastify.register(authRoutes, { prefix: '/auth' });

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    fastify.log.info(`Server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
