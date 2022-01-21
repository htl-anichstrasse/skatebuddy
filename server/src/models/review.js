class Review {
    constructor(id, parkid, userid, rating, title, content) {
        this.id = id;
        this.parkid = parkid;
        this.userid = userid;
        this.rating = rating;
        this.title = title;
        this.content = content;
    }
}

module.exports = Review;
