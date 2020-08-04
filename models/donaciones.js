const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
}, {
  collection: "ApoyoDonaciones"
});

const model = mongoose.model('ApoyoDonaciones', mySchema);

module.exports = model;