require('dotenv').config()
const mysql = require('mysql');

let balance;

console.log(process.env.DB_HOST)

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

connection.connect();

connection.query('SELECT * FROM USERS', function (err, rows, fields) {
    if (err) throw err;
    console.log(rows[0].balance);
    balance = rows[0].balance;
})

module.exports = balance;

connection.end()
