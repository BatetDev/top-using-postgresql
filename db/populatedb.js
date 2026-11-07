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
    connectionString: `postgresql://franbtt:${process.env.DATABASE_PASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
