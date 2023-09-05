import { fastify } from 'fastify';

const app = fastify({
  logger: true
});

app.get('/', async function homeHandler () {
  return {
    api: 'fastify-restaurant-api',
    version: 1
  };
});

await app.listen({ port: 3000 });
