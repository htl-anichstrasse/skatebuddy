class SkateObstacleConnector {
    constructor(parkId, obstacleId) {
        this.parkId = parkId;
        this.obstacleId = obstacleId;
    }
}

SkateObstacleConnector.selectAll = con => {
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

SkateObstacleConnector.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skaterpark_obstacle_connector where ObstacleId = ?',
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
SkateObstacleConnector.insertValue = (con, SkateparkObstacle) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skaterpark_obstacle_connector(ObstacleID, SkateparkID) values (?, ?)',
            [SkateparkObstacle.parkId, SkateparkObstacle.obstacleId],
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

SkateObstacleConnector.update = (con, column, newValue, id) => {
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

SkateObstacleConnector.deleteValue = (con, id) => {
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

module.exports = SkateObstacleConnector;
