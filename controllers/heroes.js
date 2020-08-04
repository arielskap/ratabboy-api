const store = require('../store/heroes');

const getHeroes = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getHeroes,
}