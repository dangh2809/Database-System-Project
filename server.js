const express = require('express');
const app = express();
const cors = require('cors')
const mysql = require("mysql");
let port = process.env.PORT || 8080

const db = mysql.createConnection({
    user:"b5c5dfef372ba4",
    host:"us-cdbr-east-05.cleardb.net",
    password: "f6ec2728",
    database: "heroku_9da6c3d4f9a785d"
})

app.use(express.json());
app.use(express.urlencoded({extend: false}));


if (process.env.NODE_ENV =="production")
{
    app.use(express.static("./frontend/build"));
}
// const testUser = {
//     firstName: "David",
//     lastName: "Blaine",
//     username: "DavidB",
//     password: "12345"
// }
// app.get("/test", (req, res) => {
//     console.log(
//         "server reach"
//     );
//     db.query("INSERT INTO user (username, password, firstName, lastName) VALUES (?,?,?,?)", [testUser.username, testUser.password, testUser.firstName, testUser.lastName], (err, result) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log("Data has been added");
//             res.send(result);
//         }
//     })
// })
app.listen( port, () =>{
    console.log(`Server is running on port ${port}`);
})