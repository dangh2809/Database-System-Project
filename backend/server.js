const express = require('express');
const app = express();
const mysql = require("mysql");
let port = process.env.PORT || 8080

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password: "1234",
    database: "database-project"
})

app.listen( port, () =>{
    console.log(`Server is running on port ${port}`);
})