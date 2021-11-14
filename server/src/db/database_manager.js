var mysql = require('mysql');

const con = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'bichl601',
	port: '3306',
	database: 'diplomDb',
});

let diplomdb = {};

diplomdb.all = () => {
	return new Promise((resolve, reject) => {
		con.query('Select * from testtable;', (err, result) => {
			if (err) {
				return reject(err);
			}
			return resolve(result);
		});
	});
};

diplomdb.getId = (id) => {
	return new Promise((resolve, reject) => {
		con.query('Select * from testtable where id = ?',[id],
			(err, result) => {
				if (err) {
					return reject(err);
				}
				return resolve(result[0]);
			},
		);
	});
};

diplomdb.insertValue = (testString) => {
	return new Promise((resolve, reject) => {
		con.query('Insert into testtable values (?)',[testString],
			(err, result) => {
				if (err) {
					return reject(err);
				}
				return resolve(result[0]);
				console.log("Succsessfully inserted!");
			},
		);
	});
};
module.exports = diplomdb;
