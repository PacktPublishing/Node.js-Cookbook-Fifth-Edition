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
    await connection.query('CREATE DATABASE IF NOT EXISTS tasks');

    console.log('Database created or already exists.');
    await connection.query('USE tasks');

    const createTasksTableSql = `
        CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        task VARCHAR(255) NOT NULL,
        completed BOOLEAN NOT NULL DEFAULT FALSE
        )`;

    await connection.query(createTasksTableSql);
    console.log('Tasks table created or already exists.');
  } catch (error) {
    console.error('Error connecting: ' + error.stack);
  } finally {
    if (connection) await connection.end();
  }
}

main().catch(console.error);
