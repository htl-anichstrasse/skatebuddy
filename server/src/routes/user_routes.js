const express = require('express');
const users = require('../db/user_table_manager');
const router = express.Router();
var mysql = require('mysql');
const { json } = require('body-parser');

const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'hurensohn',
    port: '3306',
    database: 'skater_app',
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
        res.sendStatus(500);
    }
});

router.post('/users', async (req, res, next) => {
    try {
        const user = {
            name: req.body.name,
            passwordHash: req.body.passwordHash,
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
