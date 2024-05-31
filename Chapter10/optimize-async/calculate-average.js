const { MongoClient } = require('mongodb');
const URL = 'mongodb://localhost:27017/';

async function main () {
  const client = new MongoClient(URL);

  try {
    await client.connect();

    const db = client.db('data');
    const values = db.collection('values');
    const averages = db.collection('averages');

    const data = await values.find({}).toArray();

    // Calculate average
    const average =
      data.reduce((accumulator, value) => accumulator + value.value, 0) /
      data.length;

    await averages.insertOne({ value: average });
    console.log('Stored average in database.');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main().catch(console.error);
