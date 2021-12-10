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

skateObstacleConnector.update = (con, row, oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE skaterpark_obstacle_connector SET ? Where ? = ?'[
                (row, oldValue, newValue)
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

skateObstacleConnector.delete = (con, row, rowValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skaterpark_obstacle_connector WHERE ? = ?'[
                (row, rowValue)
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
