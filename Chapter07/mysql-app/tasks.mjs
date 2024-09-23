import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
dotenv.config();

async function main () {
  let connection;

  try {
    connection = await mysql.createConnection({
      user: process.env.DB_MYSQL_USER,
      password: process.env.DB_MYSQL_PASSWORD
    });

    console.log('Connected as id ' + connection.threadId);
    if (process.argv[2]) {
      await connection.query(
        'INSERT INTO tasks.tasks (task) VALUES (?);',
        [process.argv[2]]
      );
    }
    const [results] = await connection.query('SELECT * FROM tasks.tasks;');
    console.log(results);
    connection.end();
  } catch (error) {
    console.error('Error connecting: ' + error.stack);
  } finally {
    if (connection) await connection.end();
  }
}

main().catch(console.error);
