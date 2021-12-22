const express = require('express');
const SkateparkObstacleCon = require('../db/skatepark_obstacle_connector_table_manager');
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

router.get('/skateparkObstacle', async (req, res, next) => {
    try {
        let results = await SkateparkObstacleCon.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparkObstacle/:id', async (req, res, next) => {
    try {
        let results = await SkateparkObstacleCon.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/skateparkObstacle', async (req, res, next) => {
    try {
        const skateparkObstacle = {
            obstacleId: req.body.obstacleId,
            parkId: req.body.parkId,
        };
        await SkateparkObstacleCon.insertValue(con, skateparkObstacle);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/skateparkObstacle/:id', async (req, res, next) => {
    try {
        await SkateparkObstacleCon.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'successfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/skateparkObstacle/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    console.log(req.params.id);
    try {
        await SkateparkObstacleCon.update(
            con,
            x.column,
            x.newValue,
            req.params.id,
        );
        res.send({ success: true, message: 'successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
