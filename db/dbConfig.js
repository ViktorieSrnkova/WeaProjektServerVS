import mysql from "mysql2";
import env from "../src/services/env.js";
env();

console.log({
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
});

const conn = mysql.createConnection({
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  host: process.env.MYSQLHOST,
  port: process.env.MYSQLPORT,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("database connected");
});

export default conn;
