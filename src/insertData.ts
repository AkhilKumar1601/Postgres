import client from "./db";

export const insertUser = async (username : string, email : string, password : string) => {
  try {
    const query = `
     INSERT INTO users (username, email, password)
     VALUES ($1,$2,$3)
     RETURNING *
    `
    const values = [username,email,password];
    const result = await client.query(query,values);
    console.log("User added successfully", result.rows[0]);
  } catch (e) {
    console.error('Error while adding user',e);
  }
}