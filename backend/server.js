const express = require('express');
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password: process.env.MySQL_PASS,
    database: "database-project"
})

app.listen(8080, () =>{
    console.log("Server is running on port 8080");
})