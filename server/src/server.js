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
const skateparkSuggestionRouter = require('./routes/skatepark_suggestion_routes');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRouter);

app.use('/api', obstacleRouter);
app.use('/api', skateparkPicRouter);
app.use('/api', reviewRouter);
app.use('/api', skateparkSuggestionRouter);
app.use('/api', skateparkRouter);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    next();
});

app.listen(port, () => {
    console.log(`app listening at https://skate-buddy.josholaus.com/api`);
});
