const express = require('express');
const userRouter = require('./routes/user_routes');
const obstacleRouter = require('./routes/obstacle_routes');
const skateparkRouter = require('./routes/skatepark_routes');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api', skateparkRouter);
app.use('/api', obstacleRouter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
