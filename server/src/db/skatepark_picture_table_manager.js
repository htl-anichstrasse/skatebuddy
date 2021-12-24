const SkateparkPictures = require('../models/skatepark_pictures');

SkateparkPictures.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skatepark_pictures', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

SkateparkPictures.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skatepark_pictures where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                result[0];
            },
        );
    });
};
SkateparkPictures.insertValue = (con, skateparkpic) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skatepark_pictures(SkateparkID, PictureId) values (?, ?)',
            [skateparkpic.parkId, skateparkpic.picId],
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

SkateparkPictures.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE Skatepark_pictures SET ${column} = ? Where SkateparkID = ? `,
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

SkateparkPictures.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM Skatepark_pictures WHERE SkateparkID = ?',
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

module.exports = SkateparkPictures;