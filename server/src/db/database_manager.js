var mysql = require('mysql');
var fs = require('fs');

const password = fs.readFileSync('./db/password.txt', 'utf8');

const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'hurensohn',
    port: '3306',
    database: 'skater_app',
});

module.exports = con;
