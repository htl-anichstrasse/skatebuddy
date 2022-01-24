class Review {
    constructor(reviewId, skateparkId, userId, rating, title, content) {
        this.reviewId = reviewId;
        this.skateparkId = skateparkId;
        this.userId = userId;
        this.rating = rating;
        this.title = title;
        this.content = content;
    }
}

module.exports = Review;
