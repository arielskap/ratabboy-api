const Model = require('../models/donaciones');

const getDonaciones = async () => {
  const donaciones = await Model.find();
  return donaciones;
}

module.exports = {
  list: getDonaciones,
}