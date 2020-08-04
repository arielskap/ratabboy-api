const store = require('../store/miniJuego');

const getMiniJuego = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getMiniJuego,
}