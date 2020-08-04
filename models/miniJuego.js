const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  objective: {
    type: String,
    required: true
  },
  dataPj: {
    type: [],
    required: true
  }
}, {
  collection: "MiniJuego"
})

const model = mongoose.model('MiniJuego', mySchema);

module.exports = model;