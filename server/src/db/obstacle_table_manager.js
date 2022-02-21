const Obstacle = require('../models/obstacle');
const Image = require('../models/image');
const fs = require('fs');
const { resolve } = require('path');

Obstacle.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from obstacles', (err, result) => {
            if (err) {
                return reject(err);
            }
            let obstacles = [];
            for (let i = 0; i < result.length; i++) {
                obstacles[i] = new Obstacle(
                    result[i].ObstacleID,
                    result[i].Description,
                );
            }
            return resolve(obstacles);
        });
    });
};

Obstacle.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from obstacles where ObstacleID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                    new Obstacle(result[0].ObstacleID, result[0].Description),
                );
            },
        );
    });
};
Obstacle.insertValue = (con, obstacle) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into obstacles(Description) values (?)',
            [obstacle.description],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
            },
        );
    });
};

Obstacle.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE obstacles SET ${column} = ? Where ObstacleID = ? `,
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

Obstacle.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM obstacles WHERE ObstacleID = ?',
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

Obstacle.readObstacleImage = (obstacleId) => {
    return new Promise((resolve, reject) => {
        let path =
            process.env.IMAGE_PATH +
            `/obstacles/obstaclePicture${obstacleId}.PNG`;
        console.log(path);
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
module.exports = Obstacle;
