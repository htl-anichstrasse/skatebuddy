const Review = require('../models/review');

Review.selectAll = (con) => {
    return new Promise((resolve, reject) => {
        con.query(
            `Select reviews.reviewID, reviews.SkateparkID, reviews.UserID, reviews.Rating, reviews.Title, reviews.Content, users.name as Username 
            from reviews
            INNER JOIN users ON reviews.userID = users.userID 
            order by reviews.reviewId desc;`,
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                let reviews = [];
                for (let i = 0; i < result.length; i++) {
                    reviews[i] = new Review(
                        result[i].ReviewID,
                        result[i].SkateparkID,
                        result[i].UserID,
                        result[i].Rating,
                        result[i].Title,
                        result[i].Content,
                        result[i].Username,
                    );
                }
                return resolve(reviews);
            },
        );
    });
};

Review.getById = (con, id) => {
    return new Promise((resolve, reject) => {
        con.query(
            `Select reviews.reviewID, reviews.SkateparkID, reviews.UserID, reviews.Rating, reviews.Title, reviews.Content, users.name as Username 
            from reviews
            INNER JOIN users ON reviews.userID = users.userID 
            where reviews.skateparkId = ? order by reviews.reviewId desc;`,
            [id],
            (err, result) => {
                if (err) {
                    return reject(err);
                }
                let reviews = [];
                for (let i = 0; i < result.length; i++) {
                    reviews[i] = new Review(
                        result[i].ReviewID,
                        result[i].SkateparkID,
                        result[i].UserID,
                        result[i].Rating,
                        result[i].Title,
                        result[i].Content,
                        result[i].Username,
                    );
                }
                console.log(result);
                return resolve(reviews);
            },
        );
    });
};

Review.insertValue = (con, review) => {
    return new Promise((resolve, reject) => {
        con.query(
            'Insert into reviews(Skateparkid, UserId, Rating, Title, Content) values (?, ?, ?, ?, ?)',
            [
                review.skateparkId,
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
