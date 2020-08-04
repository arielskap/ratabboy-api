const Model = require('../models/heroes');

const getHeroes = async () => {
  const heroes = await Model.find();
  return heroes;
}

module.exports = {
  list: getHeroes,
}