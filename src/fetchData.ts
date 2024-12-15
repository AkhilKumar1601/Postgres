import client from "./db";

export const fetchUsers = async () => {
  try {
     const query = `SELECT * FROM users;`
     const result = await client.query(query);
     console.log('Users fetched data',result.rows);
  } catch (e) {
     console.error('Error while fetching the data',e);
  }
}