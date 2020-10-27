const express = require('express');
const app = express();

const logger = require('morgan');

const idRouter = require('./routes/id/id');
const userRouter = require('./routes/user/user');


app.use(logger('dev'));
app.use(express.json());

app.use('/id', idRouter);
app.use('/user', userRouter);


const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`)
});

module.exports = app;