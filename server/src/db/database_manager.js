var mysql = require('mysql');

const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    port: '3306',
    database: 'skater_app',
});

module.exports = con;
