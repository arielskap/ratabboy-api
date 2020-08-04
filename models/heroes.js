const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  power: {
    type: Number,
    required: true
  },
  element: {
    type: String,
    required: true
  },
  stars:  {
    type: Number,
    required: true
  },
  attack:  {
    type: Number,
    required: true
  },
  defense:  {
    type: Number,
    required: true
  },
  health:  {
    type: Number,
    required: true
  },
  manaSpeed: {
    type: String,
    required: true
  },
  class: {
    type: String,
    required: true
  },
  family: {
    type: String,
    required: true
  },
  event: {
    type: String,
    required: true
  },
  effect: {
    type: Schema.Types.Mixed,
    required: true
  },
  video: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
}, {
  collection: "HeroesDatos"
})

const model = mongoose.model('HeroesDatos', mySchema);

module.exports = model;