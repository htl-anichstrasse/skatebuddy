const express = require('express');
const db = require('../db/database_manager');
const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		let results = await db.all();
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		let results = await db.getId(req.params.id);
		res.json(results);
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

router.post('/testValue', async (req, res, next) => {
	try {
		const test = {
			id: null,
			name: req.body.name,
		};
		await db.insertValue(testValue.push(test.name));
	} catch (e) {
		console.log(e);
		res.sendStatus(500);
	}
});

module.exports = router;
