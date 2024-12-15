import { connectToDB } from "./db";
import { createTable } from "./createTable";
import { insertUser } from "./insertData";
import { fetchUsers } from "./fetchData";
import { updateUser } from "./updateData";
import { deleteUser } from "./deleteData";

connectToDB();
//createTable();
//insertUser('testuser2', 'test@example2.com', 'passwordtwo123');
fetchUsers();
//updateUser(1, 'new_username', 'new_email@example.com');
deleteUser(1);
fetchUsers();