const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function connectToMongoDB () {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    return client.db('Library'); // Specify your database name here
  } catch (err) {
    console.error('Connection to MongoDB failed:', err);
  }
}

async function createAuthor (db, author) {
  try {
    const result = await db.collection('authors').insertOne(author);
    console.log(`Author created with the following id: ${result.insertedId}`);
    return result.insertedId; // Return the id of the newly created author
  } catch (err) {
    console.error('Create author failed:', err);
  }
}

async function createBook (db, book) {
  try {
    const result = await db.collection('books').insertOne(book);
    console.log(`Book created with the following id: ${result.insertedId}`);
    return result.insertedId; // Return the id of the newly created book
  } catch (err) {
    console.error('Create book failed:', err);
  }
}

async function findAllAuthors (db) {
  try {
    const authors = await db.collection('authors').find().toArray();
    console.log('Authors:', authors);
    return authors; // Return the list of authors
  } catch (err) {
    console.error('Find all authors failed:', err);
  }
}

async function findAllBooksWithAuthors (db) {
  try {
    const books = await db.collection('books').aggregate([
      {
        $lookup: {
          from: 'authors',
          localField: 'authorId',
          foreignField: '_id',
          as: 'authorDetails'
        }
      }
    ]).toArray();
    console.log('Books with author details:', books);
    return books; // Return the list of books with author details
  } catch (err) {
    console.error('Find all books with authors failed:', err);
  }
}

async function main () {
  const db = await connectToMongoDB();
  if (!db) return;

  const authorId = await createAuthor(db, { name: 'J.K. Rowling' });
  if (!authorId) return;

  await createBook(db, { title: "Harry Potter and the Sorcerer's Stone", authorId });

  await findAllAuthors(db);
  await findAllBooksWithAuthors(db);

  client.close();
}

main().catch(console.error);
