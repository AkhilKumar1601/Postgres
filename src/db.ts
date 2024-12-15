import { Client } from "pg";

const client = new Client({
  host : 'ep-fragrant-voice-a5xx55s2.us-east-2.aws.neon.tech',
  port : 5432,
  database : 'neondb',
  user : 'neondb_owner',
  password : 'CXu5xwDQ9yaB',
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function connectToDB () {
  try {
    await client.connect();
    console.log('Connected to postgres');
  } catch(e) {
    console.error('connection error',e);
    throw e;
  }
}

export default client;