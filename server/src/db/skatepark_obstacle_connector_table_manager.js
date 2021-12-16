class skateObstacleConnector {
    constructor(parkId, obstacleId) {
        this.parkId = parkId;
        this.obstacleId = obstacleId;
    }
}

skateObstacleConnector.selectAll = con => {
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

skateObstacleConnector.getById = (con, id) => {
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
skateObstacleConnector.insertValue = (con, parkId, obstacleID) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skaterpark_obstacle_connector(SkaterparkID, ObstacleID) values (?, ?)',
            [parkId, obstacleID],
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

skateObstacleConnector.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE skaterpark_obstacle_connector SET ${column} = ? Where ObstacleID = ? `,
            [(column, newValue, id)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

skateObstacleConnector.deleteValue = (con, id) => {
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
