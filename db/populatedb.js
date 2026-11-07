#! /usr/bin/env node

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Thor'),
  ('Odin'),
  ('Freya');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
