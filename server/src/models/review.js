class Review {
    constructor(reviewId, skateparkId, userid, rating, title, content) {
        this.reviewId = reviewId;
        this.skateparkId = skateparkId;
        this.userid = userid;
        this.rating = rating;
        this.title = title;
        this.content = content;
    }
}

module.exports = Review;
