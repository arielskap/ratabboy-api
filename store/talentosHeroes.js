const Model = require('../models/talentosHeroes');

const getTalentosHeroes = async () => {
  const talentosHeroes = await Model.find();
  return talentosHeroes;
}

module.exports = {
  list: getTalentosHeroes,
}