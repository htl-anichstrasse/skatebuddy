class Skatepark {
    constructor(name, lon, lat, address, busstop, rating, obstacleIds) {
        this.name = name;
        this.lon = lon;
        this.lat = lat;
        this.address = address;
        this.busstop = busstop;
        this.rating = rating;
        this.obstacleIds = obstacleIds;
    }
}

module.exports = Skatepark;
