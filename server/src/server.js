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
const skateparkObstacleRouter = require('./routes/skatepark_obstacle_con_routes');
const loginRouter = require('./routes/util/login_routes');
const signUpRouter = require('./routes/util/sign_up_routes');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRouter);
app.use('/api', skateparkRouter);
app.use('/api', obstacleRouter);
app.use('/api', skateparkPicRouter);
app.use('/api', reviewRouter);
app.use('/api', skateparkObstacleRouter);
app.use('/api', signUpRouter);
app.use('/api', loginRouter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
