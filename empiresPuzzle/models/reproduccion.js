var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Reproduccion = new Schema({
  link: {
    type: String,
    ref: "link"
  },
  name: {
    type: String,
    ref: "name"
  }
}, {
  collection: "reproduccion"
});

module.exports = mongoose.model('Reproduccion', Reproduccion)
