const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config({
  path: '.env'
});
const cors = require('cors')
const helmet = require('helmet')
const router = require('./network/routes')

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URLDB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

router(app);

app.use(cors({
  origin: true,
  credentials: true
}))
app.use(helmet())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
