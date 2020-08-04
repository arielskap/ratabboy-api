const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  className: {
    type: String,
    required: true
  },
  talents: {
    type: [],
    required: true
  }
}, {
  collection: 'TalentosHeroes'
})

const model = mongoose.model('TalentosHeroes', mySchema);

module.exports = model;