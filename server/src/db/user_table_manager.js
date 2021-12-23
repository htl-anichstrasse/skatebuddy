const jwt = require('jsonwebtoken');

class Users {
    constructor(name, passwordHash, email, profilePictureId) {
        this.name = name;
        this.passwordHash = passwordHash;
        this.email = email;
        this.profilePictureId = profilePictureId;
    }
}

Users.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from users', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

Users.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from Users where UserId = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};

Users.getByEmail = (con, email) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from Users where Email = ?',
            [email],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};

Users.insertValue = (con, user) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into users(Name, PasswordHash, Email, ProfilePictureID) values (?, ?, ?, ?)',
            [user.name, user.passwordHash, user.email, user.profilePictureId],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};

Users.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE Users SET ${column} = ? Where UserId = ? `,
            [newValue, parseInt(id)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

Users.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Delete from Users where Userid = ? ',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result.affectedRows);
            },
        );
    });
};

Users.generateToken = (user) =>
    jwt.sign(
        { name: user.name, email: user.email },
        process.env.JWT_HASH_SECRET,
        { expiresIn: '135d' },
    );

module.exports = Users;
