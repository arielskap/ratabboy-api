const express = require('express');
const response = require('../network/response')
const controller = require('../controllers/heroes');

const router = express.Router();

router.get('/', async (req, res, next) => {
  controller.getHeroes()
    .then((list) => {
      response.success(req, res, list, 200);
    })
    .catch((e) => {
      response.error(req, res, 'Unexpected Error', 500, e);
    })
})

module.exports = router;