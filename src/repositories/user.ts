import mysql from "mysql2";
import { dbconfig } from "../config/db";

console.log(">>>>>>>>>>>>>>>", dbconfig);
const conn = mysql.createPool(dbconfig);

export const findAll = () => {
  conn.query("SELECT * FROM users", (err, results, fields) => {
    console.log(results);
  });
};
