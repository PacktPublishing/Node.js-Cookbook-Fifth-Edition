async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    const user = request.session.user;
    return reply.view('index.ejs', { user: user });
  });
}

module.exports = routes;
