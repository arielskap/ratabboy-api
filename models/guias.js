const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
  },
  pc: {
    type: String,
    required: true
  }
}, {
  collection: 'Guiasdel Juego'
})

const model = mongoose.model('Guiasdel Juego', mySchema);

module.exports = model;