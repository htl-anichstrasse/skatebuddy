const SkateparkPictures = require('../models/skatepark_pictures');

SkateparkPictures.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skatepark_pictures', (err, result) => {
            if (err) {
                return reject(err);
            }
            let skateparkpics = [];
            for (i = 0; i < result.length; i++) {
                skateparkpics[i] = new SkateparkPictures(
                    result[i].SkateparkID,
                    result[i].PictureID,
                );
            }
            return resolve(skateparkpics);
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
                return resolve(
                    new SkateparkPictures(
                        result[0].SkateparkID,
                        result[0].PictureID,
                    ),
                );
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
            },
        );
    });
};

SkateparkPictures.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE skatepark_pictures SET ${column} = ? Where SkateparkID = ? `,
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
            'DELETE FROM skatepark_pictures WHERE SkateparkID = ?',
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
