const SkateparkPictures = require('../models/skatepark_pictures');
const Image = require('../models/image');
const fs = require('fs');
const { resolve } = require('path');

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
                try {
                    let skateparkpics = [];
                    for (i = 0; i < result.length; i++) {
                        skateparkpics[i] = new SkateparkPictures(
                            result[i].SkateparkID,
                            result[i].PictureID,
                        );
                    }
                    return resolve(skateparkpics);
                } catch (e) {
                    return resolve(null);
                }
            },
        );
    });
};
SkateparkPictures.readImage = (skateparkId, picId) => {
    return new Promise((resolve, reject) => {
        let path =
            process.env.IMAGE_PATH +
            `/park${skateparkId}/skateparkPicture${picId}.JPG`;
        fs.access(path, fs.constants.R_OK, (err) => {
            if (err) {
                reject({ success: 'false', message: 'Image not found' });
                return;
            }
            fs.readFile(path, (err, data) => {
                if (err) {
                    reject({
                        success: 'false',
                        message: 'Image could not be read',
                    });
                    return;
                }
                resolve(data);
            });
        });
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

SkateparkPictures.checkIfImageExists = (con, skateparkpic) => {
    return new Promise((resolve, reject) => {
        const links = [];
        for (i in skateparkpic) {
            const img = new Image(
                skateparkpic.skateparkId,
                skateparkpic.parkId,
            );
            if (fs.existsSync(img.link)) {
                links.append(img.link);
            }
        }
        return resolve(links);
    });
};
module.exports = SkateparkPictures;
