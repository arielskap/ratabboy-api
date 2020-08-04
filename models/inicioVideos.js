const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, {
  collection: "InicioVideos"
})

const model = mongoose.model('InicioVideos', mySchema);

module.exports = model;