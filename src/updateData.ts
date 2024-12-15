import client from "./db";

export const updateUser = async (id : number, username : string, email : string) => {
  try {
     const query = `UPDATE users SET username = $2, email = $3 WHERE id = $1`;
     const values = [id, username, email];
     await client.query(query, values);
     console.log('Users are updated');
  } catch (e) {
     console.error('Error while updating',e);
  }
}