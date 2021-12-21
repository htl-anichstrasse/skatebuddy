class Review {
    constructor(parkId, userId, rating, title, content) {
        this.parkId = parkId;
        this.userId = userId;
        this.rating = rating;
        this.title = title;
        this.content = content;
    }
}

Review.selectAll = con => {
    return new Promise((resolve, reject) => {
        con.query('Select * from reviews', (err, result) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        });
    });
};

Review.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Select * from reviews where reviewId = ?',
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
