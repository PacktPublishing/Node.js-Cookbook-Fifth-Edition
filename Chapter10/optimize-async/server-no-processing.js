const { MongoClient } = require('mongodb');
const express = require('express');

const URL = 'mongodb://localhost:27017/';
const app = express();

async function main () {
  const client = new MongoClient(URL);

  try {
    await client.connect();
    const db = client.db('data');
    const average = db.collection('averages');

    app.get('/', async (req, res) => {
      try {
        const data = await average.findOne({});
        res.send(`Average of all values is ${data.value}.`);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching average');
      }
    });

    app.listen(3000, () => {
      console.log('Server is listening on port 3000');
    });
  } catch (err) {
    console.error(err);
  }
}

main().catch(console.error);
