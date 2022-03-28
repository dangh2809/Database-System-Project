const express = require('express');
const app = express();
const mysql = require("mysql");
let port = process.env.PORT || 8080

const db = mysql.createConnection({
    user:process.env.MySQL_USER,
    host:"us-cdbr-east-05.cleardb.net",
    password: process.env.MySQL_PASS,
    database: "heroku_61d5f4437b7c32e"
})

app.use(express.json());
app.use(express.urlencoded({extend: false}));

if (process.env.NODE_ENV =="production")
{
    app.use(express.static("./frontend/build"));
}
app.listen( port, () =>{
    console.log(`Server is running on port ${port}`);
})