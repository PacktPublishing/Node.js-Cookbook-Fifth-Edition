const { MongoClient } = require('mongodb');
const URL = 'mongodb://localhost:27017/';
const numberOfValues = 1000;
const values = [];

for (let count = 0; count < numberOfValues; count++) {
  values.push({ value: Math.round(Math.random() * 100000) });
}

async function main () {
  const client = new MongoClient(URL);

  try {
    await client.connect();
    const db = client.db('data');
    await db.collection('values').insertMany(values);
    console.log(`Added ${numberOfValues} random values.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
