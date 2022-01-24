class User {
    constructor(userId, name, passwordhash, email, profilepictureId) {
        this.userId = userId;
        this.name = name;
        this.passwordhash = passwordhash;
        this.email = email;
        this.profilepictureId = profilepictureId;
    }
}

module.exports = User;
