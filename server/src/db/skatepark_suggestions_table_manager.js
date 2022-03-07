const SkateparkSuggestions = require('../models/skatepark_suggestions');

SkateparkSuggestions.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from skateparks_suggestions', (err, result) => {
            if (err) {
                return reject(err);
            }
            let skateparks = [];
            for (i = 0; i < result.length; i++) {
                skateparks[i] = new SkateparkSuggestions(
                    result[i].SkateparkID,
                    result[i].Name,
                    result[i].Lon,
                    result[i].Lat,
                    result[i].Address,
                    result[i].Busstop,
                );
            }
            return resolve(skateparks);
        });
    });
};

SkateparkSuggestions.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from skateparks_suggestions where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                try {
                    return resolve(
                        new SkateparkSuggestions(
                            result[0].SkateparkID,
                            result[0].Name,
                            result[0].Lon,
                            result[0].Lat,
                            result[0].Address,
                            result[0].Busstop,
                        ),
                    );
                } catch (e) {
                    resolve(null);
                }
            },
        );
    });
};

SkateparkSuggestions.getAllObstaclesFromPark = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `Select obstacles.ObstacleID, obstacles.Description, skatepark_suggestions_obstacle_connector.difficulty
            from ((obstacles inner join skatepark_suggestions_obstacle_connector on obstacles.ObstacleID = skatepark_suggestions_obstacle_connector.ObstacleID) 
            inner join skateparks_suggestions on skatepark_suggestions_obstacle_connector.SkateparkID = skateparks_suggestions.SkateparkID) 
            where skateparks_suggestions.SkateparkID = ?;`,
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            },
        );
    });
};

SkateparkSuggestions.getParkID = (con, skatepark) => {
    return new Promise((resolve, reject) => {
        con.query(
            `Select SkateparkID from skateparks_suggestions where name = ?`,
            [skatepark.name],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0].SkateparkID);
            },
        );
    });
};

SkateparkSuggestions.getAllPicturesFromPark = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `select skatepark_pictures.PictureID 
            from skatepark_pictures 
            INNER JOIN skateparks_suggestions ON skatepark_pictures.SkateparkID = skateparks_suggestions.SkateparkID 
            where skateparks_suggestions.SkateparkID = ?;`,
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                var pictures = [];
                for (let i = 0; i < result.length; i++) {
                    pictures[i] = result[i].PictureID;
                }
                var result = Object.assign(result);
                return resolve(pictures);
            },
        );
    });
};

SkateparkSuggestions.getAvgRating = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `Select avg(reviews.rating)
            as rating
            from reviews 
            INNER JOIN skateparks_suggestions ON reviews.SkateparkID = skateparks_suggestions.SkateparkID 
            where skateparks_suggestions.SkateparkID = ?;`,
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0].rating);
            },
        );
    });
};

SkateparkSuggestions.insertParkObstacles = (
    con,
    obstacleId,
    skateparkId,
    difficulty,
) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skatepark_suggestions_obstacle_connector(ObstacleID, SkateparkID, Difficulty) values (?, ?, ?)',
            [obstacleId, skateparkId, difficulty],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
            },
        );
    });
};
SkateparkSuggestions.insertValue = (con, skatepark) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into skateparks_suggestions(Name, Lon, Lat, Address, Busstop) values (?, ?, ?, ?, ?)',
            [
                skatepark.name,
                skatepark.longitude,
                skatepark.latitude,
                skatepark.address,
                skatepark.busstop,
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result[0]);
            },
        );
    });
};

SkateparkSuggestions.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE skateparks_suggestions SET ${column} = ? Where SkateparkID = ? `,
            [newValue, id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result.affectedRows);
            },
        );
    });
};

SkateparkSuggestions.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'DELETE FROM skateparks_suggestions WHERE SkateparkID = ?',
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

module.exports = SkateparkSuggestions;
