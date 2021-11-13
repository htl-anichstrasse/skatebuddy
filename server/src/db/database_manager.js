var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'bichl601',
	port: '3306',
});

con.connect(function (err) {
if (err) throw err;
	console.log('Succsessfully Connected!');
	con.query('Create Database IF NOT EXISTS diplomDb', function (err, result) {
		if (err) throw err;
		console.log('Databse created');
	});
});
