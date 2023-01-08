import mysql from "mysql";
import env from "../src/services/env.js";
env();

console.log({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_SERVER,
});
const conn = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_SERVER,
});

conn.connect(function (err) {
  ///////>>> this is where the deployment crashes
  if (err) throw err;
  console.log("database connected");
});

export default conn;
