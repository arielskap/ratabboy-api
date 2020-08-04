const store = require('../store/donaciones');

const getDonaciones = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getDonaciones,
}