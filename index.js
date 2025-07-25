// index.js

import { faker } from '@faker-js/faker';
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'DELTA',
  password: 'SHIVA'
});

let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

try {
  const [rows, fields] = await connection.query("SHOW TABLES");
  console.log(rows);

} catch (ERR) {
  console.error("An error occurred during database operation:", ERR);

} finally {
    if (connection) {
        await connection.end();
        console.log('Database connection closed.');
    }
}

 