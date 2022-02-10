class Image {
    constructor(skateparkId, pictureId) {
        this.pathPrefix = `../images/park${skateparkId}/skateparkPicture${pictureId}`;
        this.pathSuffix = '.jpg';
        this.link = pathPrefix + pathSuffix;
    }
}
module.exports = Image;
