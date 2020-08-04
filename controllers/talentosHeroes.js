const store = require('../store/talentosHeroes');

const getTalentosHeroes = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

module.exports = {
  getTalentosHeroes,
}