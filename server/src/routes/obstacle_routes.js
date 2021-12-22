const express = require('express');
const Obstacles = require('../db/obstacle_table_manager');
const router = express.Router();
var mysql = require('mysql');
const { json } = require('body-parser');
const password = fs.readFileSync(
    'C:/Users/Maximilian Neuner/Documents/Schule/Diplomarbeit/skater-app/server/src/db/password.txt',
    'utf8',
);

const con = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: password,
    port: '3306',
    database: 'skater_app',
});

router.get('/obstacles', async (req, res, next) => {
    try {
        let results = await Obstacles.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/obstacles/:id', async (req, res, next) => {
    try {
        let results = await Obstacles.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/obstacles', async (req, res, next) => {
    try {
        const obstacle = {
            description: req.body.description,
            difficulty: req.body.difficulty,
        };
        await Obstacles.insertValue(con, obstacle);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/obstacles/:id', async (req, res, next) => {
    try {
        await Obstacles.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Succssessfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/obstacles/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await Obstacles.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Succssessfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
