async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return reply.view('index.ejs');
  });
}

module.exports = routes;
