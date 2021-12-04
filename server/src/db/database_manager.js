var mysql = require('mysql');

const con = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'bichl601',
	port: '3306',
	database: 'skater-app',
});

let diplomdb = {};

diplomdb.selectAll = (table) => {
	return new Promise((resolve, reject) => {
		con.query('Select * from ?', [table], (err, result) => {
			if (err) {
				return reject(err);
			}
			return resolve(result);
		});
	});
};

diplomdb.getById = (table, id) => {
	return new Promise((resolve, reject) => {
		con.query(
			'Select * from ? where id = ?',
			[table, id],
			(err, result) => {
				if (err) {
					return reject(err);
				}
				return resolve(result[0]);
			},
		);
	});
};

diplomdb.insertValue = (table, testString) => {
	return new Promise((resolve, reject) => {
		con.query(
			'Insert into ? values (?)',
			[table, testString],
			(err, result) => {
				if (err) {
					return reject(err);
				}
				return resolve(result[0]);
				console.log('Succsessfully inserted!');
			},
		);
	});
};

module.exports = diplomdb;
