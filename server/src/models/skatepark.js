class Skatepark {
    constructor(
        skateparkId,
        name,
        longitude,
        latitude,
        address,
        busstop,
        rating,
        obstacles,
        pictures,
        links,
    ) {
        this.skateparkId = skateparkId;
        this.name = name;
        this.longitude = longitude;
        this.latitude = latitude;
        this.address = address;
        this.busstop = busstop;
        this.rating = rating;
        this.obstacles = obstacles;
        this.pictures = pictures;
        this.links = links;
    }
}

module.exports = Skatepark;
