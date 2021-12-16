const express = require('express');
const userRouter = require('./routes/user_routes');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
