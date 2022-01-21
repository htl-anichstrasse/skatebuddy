class User {
    constructor(id, name, passwordhash, email, profilepictureid) {
        this.name = name;
        this.passwordhash = passwordhash;
        this.email = email;
        this.profilepictureid = profilepictureid;
    }
}

module.exports = User;
