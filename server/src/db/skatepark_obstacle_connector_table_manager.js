const ParkObstacleConnector = require('../models/park_obstacle_connector');

ParkObstacleConnector.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skaterpark_obstacle_connector',
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            },
        );
    });
};

ParkObstacleConnector.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skaterpark_obstacle_connector where ObstacleId = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                    new ParkObstacleConnector(
                        result[0].ObstacleID,
                        result[0].SkateparkID,
                    ),
                );
            },
        );
    });
};
ParkObstacleConnector.insertValue = (con, SkateparkObstacle) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skaterpark_obstacle_connector(ObstacleID, SkateparkID) values (?, ?)',
            [SkateparkObstacle.obstacleId, SkateparkObstacle.parkid],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
            },
        );
    });
};

ParkObstacleConnector.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE skaterpark_obstacle_connector SET ${column} = ? Where ObstacleID = ?`,
            [parseInt(newValue), parseInt(id)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

ParkObstacleConnector.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skaterpark_obstacle_connector WHERE ObstacleID = ?',
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

module.exports = ParkObstacleConnector;
