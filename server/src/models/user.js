class User {
    constructor(userId, name, passwordhash, email, profilepictureId, admin) {
        this.userId = userId;
        this.name = name;
        this.passwordhash = passwordhash;
        this.email = email;
        this.profilepictureId = profilepictureId;
        this.admin = admin;
    }
}

module.exports = User;
