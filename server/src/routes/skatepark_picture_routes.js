const express = require('express');
const Skateparkpic = require('../db/skatepark_picture_table_manager');
const router = express.Router();
const { json } = require('body-parser');
const con = require('../db/database_manager');

router.get('/skateparkpictures', async (req, res, next) => {
    try {
        let results = await Skateparkpic.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparkpictures/:id', async (req, res, next) => {
    try {
        let results = await Skateparkpic.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/skateparkpictures', async (req, res, next) => {
    try {
        const skateparkpic = new Skateparkpic(req.body.parkId, req.body.picId);
        await Skateparkpic.insertValue(con, skateparkpic);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/skateparkpictures/:id', async (req, res, next) => {
    try {
        await Skateparkpic.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Succssessfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/skateparkpictures/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await Skateparkpic.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Succssessfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
