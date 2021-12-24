const Skatepark = require('../models/skatepark');

Skatepark.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skateparks', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

Skatepark.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skateparks where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                    new Skatepark(result[0].Name, result[0].Lon, result[0].Lat),
                );
            },
        );
    });
};
Skatepark.insertValue = (con, skatepark) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skateparks(Name, Lon, Lat) values (?, ?, ?)',
            [skatepark.name, skatepark.lon, skatepark.lat],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
            },
        );
    });
};

Skatepark.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE Skateparks SET ${column} = ? Where SkateparkID = ? `,
            [newValue, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

Skatepark.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skateparks WHERE SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

module.exports = Skatepark;
