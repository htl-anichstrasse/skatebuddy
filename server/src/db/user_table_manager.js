const jwt = require('jsonwebtoken');
const User = require('../models/user');

User.alreadyExists = (con, name, email) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from users where Name = ? OR Email = ?',
            [name, email],
            (err, result) => {
                if (err) {
                    return reject(err);
                } else if (!result[0]) {
                    return resolve(false);
                } else if (result[0]) {
                    return resolve(true);
                }
            },
        );
    });
};

User.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from users', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

User.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from Users where UserId = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                console.log(result);
                return resolve(
                    new User(
                        result[0].Name,
                        result[0].PasswordHash,
                        result[0].Email,
                        result[0].ProfilePictureID,
                    ),
                );
            },
        );
    });
};

User.getByEmail = (con, email) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from Users where Email = ?',
            [email],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                    new User(
                        result[0].Name,
                        result[0].PasswordHash,
                        result[0].Email,
                        result[0].ProfilePictureID,
                    ),
                );
            },
        );
    });
};

User.insertValue = (con, user) => {
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

User.updateProfilePictureId = (con, id, picId) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE Users set ProfilePictureID = ? WHERE UserId = ?;',
            [id, picId],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};
User.update = (con, column, newValue, id) => {
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

User.deleteValue = (con, id) => {
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

User.generateToken = (user) =>
    jwt.sign(
        { name: user.name, email: user.email },
        process.env.JWT_HASH_SECRET,
        { expiresIn: '135d' },
    );

module.exports = User;
