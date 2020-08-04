const store = require('../store/alianzas');

const getAlianzas = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getAlianzas,
}