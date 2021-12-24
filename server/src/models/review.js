class Review {
    constructor(parkId, userId, rating, title, content) {
        this.parkId = parkId;
        this.userId = userId;
        this.rating = rating;
        this.title = title;
        this.content = content;
    }
}

module.exports = Review;
