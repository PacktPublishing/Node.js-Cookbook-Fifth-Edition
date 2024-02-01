import { fastify } from 'fastify';

const serverOptions = {
  logger: true
};

const app = fastify(serverOptions);

app.get('/', async function homeHandler () {
  return {
    api: 'fastify-restaurant-api',
    version: 1
  };
});

const port = process.env.PORT || 3000;
await app.listen({ host: '0.0.0.0', port });
