class Skatepark {
    constructor(id, name, lon, lat, address, busstop, rating, obstacles) {
        this.id = id;
        this.name = name;
        this.lon = lon;
        this.lat = lat;
        this.address = address;
        this.busstop = busstop;
        this.rating = rating;
        this.obstacles = obstacles;
    }
}

module.exports = Skatepark;
