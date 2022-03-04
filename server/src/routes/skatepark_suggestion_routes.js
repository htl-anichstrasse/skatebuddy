const express = require('express');
const router = express.Router();
const { json } = require('body-parser');
const Skatepark = require('../db/skatepark_suggestions_table_manager');
const con = require('../db/database_manager');
const SkateparkPictures = require('../models/skatepark_pictures');

router.get('/skateparks/suggestions', async (req, res, next) => {
    try {
        let results = await Skatepark.selectAll(con);
        for (let i = 0; i < results.length; i++) {
            results[i].rating = await Skatepark.getAvgRating(
                con,
                results[i].skateparkId,
            );
            results[i].obstacles = await Skatepark.getAllObstaclesFromPark(
                con,
                results[i].skateparkId,
            );
            results[i].pictureIds = await SkateparkPictures.getById(
                con,
                results[i].skateparkId,
            );
        }
        res.json(results);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparks/suggestions/:id', async (req, res, next) => {
    try {
        let skatepark = await Skatepark.getById(con, req.params.id);
        let rating = await Skatepark.getAvgRating(con, req.params.id);
        let obstacles = await Skatepark.getAllObstaclesFromPark(
            con,
            req.params.id,
        );
        skatepark.rating = rating;
        obstacles = JSON.parse(JSON.stringify(obstacles));
        skatepark.obstacles = obstacles;
        res.json(skatepark);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/skateparks/suggestions', async (req, res, next) => {
    try {
        const skatepark = new Skatepark(
            null,
            req.body.name,
            req.body.longitude,
            req.body.latitude,
            req.body.address,
            req.body.busstop,
        );
        const obstacles = req.body.obstacles;
        await Skatepark.insertValue(con, skatepark);
        const skateparkId = await Skatepark.getParkID(con, skatepark);
        for (i of obstacles) {
            await Skatepark.insertParkObstacles(
                con,
                i.ObstacleID,
                skateparkId,
                i.difficulty,
            );
        }
        res.send({ success: true, message: 'Successfully inserted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/skateparks/suggestions/:id', async (req, res, next) => {
    try {
        await Skatepark.deleteValue(con, req.params.id);
        res.send({ success: true, message: 'Successfully deleted' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.put('/skateparks/suggestions/:id', async (req, res, next) => {
    const x = {
        column: req.body.column,
        newValue: req.body.newValue,
    };
    try {
        await Skatepark.update(con, x.column, x.newValue, req.params.id);
        res.send({ success: true, message: 'Successfully updated' });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/skateparkpictures/suggestions/:id', async (req, res, next) => {
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
