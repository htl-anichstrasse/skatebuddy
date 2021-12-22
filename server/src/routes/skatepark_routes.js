const express = require('express');
const router = express.Router();
var mysql = require('mysql');
const { json } = require('body-parser');
const Skateparks = require('../db/skaterpark_table_manager');
const con = require('../db/database_manager');

router.get('/skateparks', async (req, res, next) => {
    try {
        let results = await Skateparks.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparks/:id', async (req, res, next) => {
    try {
        let results = await Skateparks.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/skateparks', async (req, res, next) => {
    try {
        const skatepark = {
            name: req.body.name,
            lon: req.body.lon,
            lat: req.body.lat,
        };
        await Skateparks.insertValue(con, skatepark);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/skateparks/:id', async (req, res, next) => {
    try {
        await Skateparks.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Succssessfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/skateparks/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await Skateparks.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Succssessfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
