var mysql = require('mysql');

class Users {
    constructor(id, name, passworHash, email, profilePictureId) {
        this.id = id;
        this.name = name;
        this.passworHhash = passworHash;
        this.email = email;
        this.profilePictureId = profilePictureId;
    }
}

/*const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'bichl601',
    port: '3306',
    database: 'skater-app',
});
*/

Users.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from users', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

Users.insertValue = (con, name, passworHash, email, profilePictureId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into users(Name, PasswordHash, Email, ProfilePictureID) values (?, ?, ?, ?)',
            [name, passworHash, email, profilePictureId],
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

Users.update = (con, row, oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE Users SET ? Where ? = ?'[(row, oldValue, newValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

Users.delete = (con, row, rowValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM Users WHERE ? = ?'[(row, rowValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
