const express = require('express');
const users = require('../db/user_table_manager');
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
        let results = await users.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/users/:id', async (req, res, next) => {
    try {
        let results = await users.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus();
    }
});

//Register
router.post('/register', async (req, res, next) => {
    const password = req.body.password;
    console.log(password);
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    try {
        const user = {
            name: req.body.name,
            passwordHash: encryptedPassword,
            email: req.body.email,
            profilePictureId: req.body.profilePictureId,
        };

        token = users.generateToken(user);

        await users.insertValue(con, user);
        res.send({ success: true, token: token });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        if (!(email, password)) {
            res.sendStatus(400);
        }

        const user = await users.getByEmail(con, email);

        console.log(user);

        if (user && (await bcrypt.compare(password, user.PasswordHash))) {
            // Create token
            token = users.generateToken(user);
            res.send({ success: true, token: token });
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
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
        await users.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Succssessfully deleted' });
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
        await users.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Succssessfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
