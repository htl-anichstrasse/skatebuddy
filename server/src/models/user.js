class User {
    constructor(name, passwordHash, email, profilePictureId) {
        this.name = name;
        this.passwordHash = passwordHash;
        this.email = email;
        this.profilePictureId = profilePictureId;
    }
}

module.exports = User;
