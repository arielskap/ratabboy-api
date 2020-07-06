var express = require('express');
var router = express.Router();
var repository = require('../repository/reproduccionRepository')
var modelReproduccion = require('../models/reproduccion')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const reproduccionesData = await repository.getAll()
  if (reproduccionesData) {
    const reproducciones = { body: reproduccionesData, type: 'success' }
    res.status(200).json(reproducciones);
  } else {
    res.status(504).send('error')
  }
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;