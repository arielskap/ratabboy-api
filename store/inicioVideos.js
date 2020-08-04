const Model = require('../models/inicioVideos');

const getInicioVideos = async () => {
  const inicioVideos = await Model.find();
  return inicioVideos;
}

module.exports = {
  list: getInicioVideos,
}