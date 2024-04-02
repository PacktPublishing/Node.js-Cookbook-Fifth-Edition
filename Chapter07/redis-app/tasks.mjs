import { createClient } from 'redis';
const client = createClient();

const task = process.argv[2];
client.on('error', (err) => {
  console.log('Error:', err);
});

await client.connect();

if (!task) {
  listTasks();
} else {
  addTask(task);
}

async function addTask (task) {
  const key = `Task:${Math.random().toString(32).replace('.', '')}`;

  await client.hSet(key, 'task', task);

  listTasks();
}

async function listTasks () {
  const keys = await client.keys('Task:*');

  for (const key of keys) {
    const task = await client.hGetAll(key);

    console.log(task);
  }

  client.quit();
}
