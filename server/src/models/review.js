class Review {
    constructor(
        reviewId,
        skateparkId,
        userId,
        rating,
        title,
        content,
        username,
    ) {
        this.reviewId = reviewId;
        this.skateparkId = skateparkId;
        this.userId = userId;
        this.rating = rating;
        this.title = title;
        this.content = content;
        this.username = username;
    }
}

module.exports = Review;
