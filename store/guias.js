const Model = require('../models/guias');

const getGuias = async () => {
  const guias = await Model.find();
  return guias;
}

module.exports = {
  list: getGuias,
}