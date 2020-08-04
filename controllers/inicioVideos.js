const store = require('../store/inicioVideos');

const getInicioVideos = (name, link) => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getInicioVideos,
}