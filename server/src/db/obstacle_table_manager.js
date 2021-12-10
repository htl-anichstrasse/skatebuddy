class obstacles {
    constructor(obstacleId, description, difficulty) {
        this.obstacleId = obstacleId;
        this.description = description;
        this.difficulty = difficulty;
    }
}

obstacles.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from obstacles', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

obstacles.insertValue = (con, obstacleID, description, difficulty) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into obstacles(ObstacleID, Description, Difficulty) values (?, ?, ?)',
            [obstacleID, description, difficulty],
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

obstacles.update = (con, row, oldValue, newValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'UPDATE obstacles SET ? Where ? = ?'[(row, oldValue, newValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

obstacles.delete = (con, row, rowValue) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM obstacles WHERE ? = ?'[(row, rowValue)],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};
