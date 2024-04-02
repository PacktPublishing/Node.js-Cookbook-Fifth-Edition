const { authors, books } = require('./data');

const resolvers = {

  Query: {

    books: () => books,

    authors: () => authors

  },

  Book: {

    author: (parent) => authors.find(author => author.id === parent.authorId)

  },

  Author: {

    books: (parent) => books.filter(book => book.authorId === parent.id)

  }

};

module.exports = { resolvers };
