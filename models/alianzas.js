const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  titans: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  requirements: {
    type: String,
    required: true
  },
  review: {
    type: String,
    required: true
  },
}, {
  collection: "AlianzasDatos"
})

const model = mongoose.model('AlianzasDatos', mySchema);

module.exports = model;