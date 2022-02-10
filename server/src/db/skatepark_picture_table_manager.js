const SkateparkPictures = require('../models/skatepark_pictures');
const Image = require('../models/image');
const fs = require('fs');

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
                        let path = `./src/images/park${result[i].SkateparkID}/skateparkPicture${result[i].PictureID}.PNG`;
                        console.log(process.cwd());
                        try {
                            if (fs.existsSync(path)) {
                                console.log('if');
                                skateparkpics[i] = new SkateparkPictures(
                                    result[i].SkateparkID,
                                    result[i].PictureID,
                                );
                            } else {
                                console.log('else');
                            }
                        } catch (err) {
                            console.log('__dirname');
                            continue;
                        }
                    }
                    return resolve(skateparkpics);
                } catch (e) {
                    return resolve(null);
                }
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
