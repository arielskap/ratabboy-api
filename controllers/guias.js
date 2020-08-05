const store = require('../store/guias');

const getGuias = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getGuias,
}