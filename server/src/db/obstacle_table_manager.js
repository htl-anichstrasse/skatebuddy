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

obstacles.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from obstacles where ObstacleId = ?',
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

obstacles.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE obstacles SET ${column} = ? Where ObstacleID = ? `,
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

obstacles.deleteValue = (con, id) => {
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
