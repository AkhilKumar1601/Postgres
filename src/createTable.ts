import client from "./db";

export const createTable = async () => {
  try {
     const query = `
      CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       username VARCHAR(50) UNIQUE NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
     `;

      await client.query(query);
      console.log('Table "users" created successfully');
  } catch (e) {
    console.log('Error while creating Table',e);
  }
};

