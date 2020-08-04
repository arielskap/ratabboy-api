const Model = require('../models/miniJuego');

const getMiniJuego = async () => {
  const miniJuego = await Model.find();
  return miniJuego;
}

module.exports = {
  list: getMiniJuego,
}