const Model = require('../models/alianzas');

const getAlianzas = async () => {
  const alianzas = await Model.find();
  return alianzas;
}

module.exports = {
  list: getAlianzas,
}