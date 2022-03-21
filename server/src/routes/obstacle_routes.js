const express = require('express');
const Obstacles = require('../db/obstacle_table_manager');
const router = express.Router();
const { json } = require('body-parser');
const con = require('../db/database_manager');

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
        res.sendStatus();
    }
});

router.post('/obstacles', async (req, res, next) => {
    try {
        const obstacle = new Obstacles(null, req.body.description, null);
        await Obstacles.insertValue(con, obstacle);
        res.send({ success: true, message: 'Successfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/obstacles/:id', async (req, res, next) => {
    try {
        await Obstacles.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Successfully deleted' });
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
        res.send({ success: true, message: 'Successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;
