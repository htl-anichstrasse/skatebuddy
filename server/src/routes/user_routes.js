const express = require('express');
const users = require('../db/user_table_manager');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { json } = require('body-parser');
const con = require('../db/database_manager');

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
        var password = req.body.passwordHash;
        results.PasswordHash = await bcrypt.compare(
            password,
            results.PasswordHash,
        );
        results.PasswordHash = password;
        console.log(results.PasswordHash);

        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus();
    }
});

router.post('/users', async (req, res, next) => {
    const password = req.body.passwordHash;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);

    try {
        const user = {
            name: req.body.name,
            passwordHash: encryptedPassword,
            email: req.body.email,
            profilePictureId: req.body.profilePictureId,
        };
        await users.insertValue(con, user);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
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
