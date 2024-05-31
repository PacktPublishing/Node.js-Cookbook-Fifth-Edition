const { MongoClient } = require('mongodb');
const express = require('express');

const URL = 'mongodb://localhost:27017/';
const app = express();

(async () => {
  try {
    const client = new MongoClient(URL);
    await client.connect();

    const db = client.db('data');
    const values = db.collection('values');

    app.get('/', async (req, res) => {
      try {
        const data = await values.find({}).toArray();

        const average =
          data.reduce((accumulator, value) => accumulator + value.value, 0) /
          data.length;

        res.send(`Average of all values is ${average}.`);
      } catch (err) {
        res.send(err);
      }
    });

    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (err) {
    console.error(err);
  }
})();
