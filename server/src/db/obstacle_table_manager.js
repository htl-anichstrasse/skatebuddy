class Obstacles {
    constructor(obstacleId, description, difficulty) {
        this.obstacleId = obstacleId;
        this.description = description;
        this.difficulty = difficulty;
    }
}

Obstacles.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from obstacles', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

Obstacles.getById = (con, id) => {
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
Obstacles.insertValue = (con, obstacle) => {
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

Obstacles.update = (con, column, newValue, id) => {
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

Obstacles.deleteValue = (con, id) => {
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

module.exports = Obstacles;
