const fastify = require('fastify')({ logger: true });

fastify.register(require('@fastify/mysql'), {
  connectionString: 'mysql://root:PASSWORD@localhost/mysql'
});

fastify.get('/tasks', (req, reply) => {
  fastify.mysql.query(
    'SELECT * FROM tasks.tasks',
    function onResult (err, result) {
      reply.send(err || result);
    }
  );
});

fastify.listen({ port: 3000 }, err => {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
