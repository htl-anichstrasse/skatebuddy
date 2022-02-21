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

router.get('/skateparkpictures/:id/:pid', async (req, res, next) => {
    try {
        try {
            let image = await Skateparkpic.readImage(
                req.params.id,
                req.params.pid,
            );
            res.set({ 'Content-Type': 'image/jpg' });
            res.send(image);
        } catch (error) {
            res.json(error);
        }
    } catch (e) {
        res.sendStatus(500);
    }
});

router.post('/skateparkpictures', async (req, res, next) => {
    try {
        const skateparkpic = new Skateparkpic(req.body.parkId, req.body.picId);
        await Skateparkpic.insertValue(con, skateparkpic);
        res.send({ success: true, message: 'Successfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/skateparkpictures/:id', async (req, res, next) => {
    try {
        await Skateparkpic.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Successfully deleted' });
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
        res.send({ success: true, message: 'Successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparkpictures/:id', async (req, res, next) => {
    try {
        let pictures = await Skatepark.getAllPicturesFromPark(
            con,
            req.params.id,
        );
        res.json(pictures);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
