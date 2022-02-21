const express = require('express');
const User = require('../db/user_table_manager');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { json } = require('body-parser');
const con = require('../db/database_manager');
const jwt = require('jsonwebtoken');

router.use('/users*', async (req, res, next) => {
    const auth = req.headers['authorization'];

    if (!auth) {
        res.sendStatus(401);
        return;
    }
    const token = auth.split(' ');
    try {
        jwt.verify(token[1], process.env.JWT_HASH_SECRET);
        next();
    } catch (e) {
        res.sendStatus(401);
    }
});

router.get('/users', async (req, res, next) => {
    try {
        let results = await User.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/users/:id', async (req, res, next) => {
    try {
        let results = await User.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus();
    }
});

router.post('/check/email', async (req, res, next) => {
    const email = req.body.email;
    try {
        let results = await User.getByEmail(con, email);
        if (results != null) {
            res.send({ exists: true });
        } else {
            res.send({ exists: false });
        }
    } catch (e) {
        console.log(e);
        res.sendStatus();
    }
});

//Register
router.post('/register', async (req, res, next) => {
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    try {
        const temp = new User(
            null,
            req.body.name,
            encryptedPassword,
            req.body.email,
        );
        var alreadyExists = await User.alreadyExists(
            con,
            temp.name,
            temp.email,
        );
        if (!alreadyExists) {
            await User.insertValue(con, temp);
            const user = await User.getByEmail(con, temp.email);
            token = User.generateToken(user);
            res.send({ success: true, token: token });
        } else {
            res.send({ success: false, message: 'User already exists!' });
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email, password)) {
            res.sendStatus(400);
        }
        const user = await User.getByEmail(con, email);
        if (user && (await bcrypt.compare(password, user.passwordhash))) {
            // Create token
            token = User.generateToken(user);
            res.send({ success: true, token: token });
        } else {
            res.send({ success: false });
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(401);
    }
});

router.post('/users/decode', async (req, res) => {
    const token = req.body.token;
    if (!token) {
        res.sendStatus(400);
        return;
    }
    try {
        const playload = User.decodeToken(token);
        res.json(playload);
    } catch (e) {
        console.log(e);
        res.send({ success: false, message: "Payload couldn't get decoded" });
    }
});

router.post('/users/validate', async (req, res) => {
    const token = req.body.token;
    if (!token) {
        res.sendStatus(400);
        return;
    }
    try {
        jwt.verify(token, process.env.JWT_HASH_SECRET);
        res.send({ success: true, message: 'Token Valid' });
    } catch (e) {
        res.send({ success: false, message: 'Token Invalid' });
    }
});

router.delete('/users/:id', async (req, res, next) => {
    try {
        await User.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Successfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/users/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await User.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
