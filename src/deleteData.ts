import client from "./db";

export const deleteUser = async (id : number) => {
  try {
    const query = `DELETE FROM users WHERE id = $1`;
    const values = [id];

    await client.query(query,values);
    console.log('User deleted sucessfully');
  } catch (e) {
    console.error('Error while deleting',e);
  }
}