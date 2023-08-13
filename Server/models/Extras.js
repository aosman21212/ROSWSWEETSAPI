// models/Extras.js
const mongoose = require('mongoose');

const extrasSchema = new mongoose.Schema({
  extraType: {
    type: Number,
    required: true,
  },
  extraNameEn: {
    type: String,
    required: true,
  },
  extraNameAr: {
    type: String,
    required: true,
  },
  extraPrice: {
    type: Number,
    required: true,
  },
  extraDescEn: {
    type: String,
    required: true,
  },
  extraDescAr: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  updatedDate: {
    type: Date,
    default: Date.now,
  },
});

const Extras = mongoose.model('Extras', extrasSchema);

module.exports = Extras;
