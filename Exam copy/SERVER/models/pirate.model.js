const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required (DB ERROR)"],
    minLength: [3, "{PATH} must have at least 3 chars"]
  },
  image: {
    type: String,
    required: [true, "{PATH} is required (DB ERROR)"],
    minLength: [3, "{PATH} must have at least 3 chars"]
  },
  numChests: {
    type: Number,
    required: [true, "please provide a number (DB ERROR)"],
    min: [0, "must be valid"]
  },
  position: {
    type: String,
    required: [true, "please provide a position (DB ERROR)"],
    min: [3, "please select a valid position"]
  },
  peg: {
    type: Boolean,
    default: true
  },
  patch: {
    type: Boolean,
    default: true
  },
  hook: {
    type: Boolean,
    default: true
  },
});

const Pirate = mongoose.model('Pirate', PirateSchema);
module.exports = Pirate;