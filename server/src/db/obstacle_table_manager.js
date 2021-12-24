const Obstacle = require('../models/obstacle');

Obstacle.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from obstacles', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
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
                console.log(resolve(result[0]));
                return resolve(
                    new Obstacle(result[0].description, result[0].difficulty),
                );
            },
        );
    });
};
Obstacle.insertValue = (con, obstacle) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into obstacles(Description, Difficulty) values (?, ?)',
            [obstacle.description, obstacle.difficulty],
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

module.exports = Obstacle;