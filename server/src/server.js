const express = require('express');
const apiRouter = require('./routes');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/tests', apiRouter);

app.get('/test', (req, res) => {
	fs.readFile(__dirname + '/' + 'test.json');
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
