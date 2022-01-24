const express = require('express');
const Review = require('../db/review_table_manager');
const router = express.Router();
const { json } = require('body-parser');
const con = require('../db/database_manager');

router.get('/reviews', async (req, res, next) => {
    try {
        let results = await Review.selectAll(con);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/reviews/:id', async (req, res, next) => {
    try {
        let results = await Review.getById(con, req.params.id);
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/reviews', async (req, res, next) => {
    try {
        const review = new Review(
            null,
            req.body.parkid,
            req.body.userid,
            req.body.rating,
            req.body.title,
            req.body.content,
        );
        console.log(review);
        await Review.insertValue(con, review);
        res.send({ success: true, message: 'Succsessfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/reviews/:id', async (req, res, next) => {
    try {
        await Review.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'successfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/reviews/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await Review.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;
