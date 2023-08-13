// models/Branch.js
const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
  branchNameEn: {
    type: String,
    required: true,
  },
  branchNameAr: {
    type: String,
    required: true,
  },
  branchLocation: {
    type: String,
    required: true,
  },
  branchAddressEn: {
    type: String,
    required: true,
  },
  branchAddressAr: {
    type: String,
    required: true,
  },
  isAllowDelivery: {
    type: Boolean,
    required: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
  branchTiming: {
    type: String,
    required: true,
  },
});

const Branch = mongoose.model('Branch', branchSchema);

module.exports = Branch;
