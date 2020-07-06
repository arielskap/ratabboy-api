const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config({
  path: '.env'
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const reproduccionRouter = require('./routes/reproduccionRoute');

const app = express();

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, (error, respuesta) => {
  if (error) {
    throw error
  }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reproduccion', reproduccionRouter);

module.exports = app;
