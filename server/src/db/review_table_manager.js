const Review = require('../models/review');

Review.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query('Select * from reviews', (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

Review.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from reviews where SkateparkID = ?',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(
                    new Review(
                        result[0].SkateparkID,
                        result[0].UserID,
                        result[0].Rating,
                        result[0].Title,
                        result[0].Content,
                    ),
                );
            },
        );
    });
};

Review.insertValue = (con, review) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into reviews(Skateparkid, UserId, Rating, Title, Content) values (?, ?, ?, ?, ?)',
            [
                review.parkId,
                review.userId,
                review.rating,
                review.title,
                review.content,
            ],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result[0]);
            },
        );
    });
};

Review.update = (con, column, newValue, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `UPDATE reviews SET ${column} = ? Where reviewId = ? `,
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

Review.deleteValue = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Delete from reviews where ReviewId = ? ',
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result.affectedRows);
            },
        );
    });
};

module.exports = Review;
