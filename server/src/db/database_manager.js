var mysql = require('mysql');

const con = mysql.createPool({
    connectionLimit: 10,
    host: 'pma.josholaus.com',
    user: 'skater-app',
    password: process.env.DB_PASSWORD,
    port: '3306',
    database: 'skater_app',
});

module.exports = con;
