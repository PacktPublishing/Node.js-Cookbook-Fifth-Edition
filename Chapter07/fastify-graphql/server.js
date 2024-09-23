const fastify = require('fastify')();

const mercurius = require('mercurius');

const { readFileSync } = require('fs');

const { resolvers } = require('./resolvers');

const schema = readFileSync('./schema.graphql', 'utf-8');

fastify.register(mercurius, {

  schema,

  resolvers,

  graphiql: true

});

fastify.listen({ port: 3000 }, () => {
  console.log('Server running at http://localhost:3000');
});
