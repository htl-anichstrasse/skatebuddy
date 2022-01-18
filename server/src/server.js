const express = require('express');
const result = require('dotenv').config();

if (result.error) {
    throw result.error;
}

const userRouter = require('./routes/user_routes');
const obstacleRouter = require('./routes/obstacle_routes');
const skateparkRouter = require('./routes/skatepark_routes');
const skateparkPicRouter = require('./routes/skatepark_picture_routes');
const reviewRouter = require('./routes/review_routes');

const bodyParser = require('body-parser');

const app = express();
const port = 3000;

/*
app.use(bodyParser.json()),
    use('/api', userRouter),
    use('/api', skateparkRouter),
    use('/api', obstacleRouter),
    use('/api', skateparkPicRouter),
    use('/api', reviewRouter);
*/

app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api', skateparkRouter);
app.use('/api', obstacleRouter);
app.use('/api', skateparkPicRouter);
app.use('/api', reviewRouter);

app.listen(port, () => {
    console.log(`app listening at https://skate-buddy.josholaus.com/api/skateparks
    `);
});
