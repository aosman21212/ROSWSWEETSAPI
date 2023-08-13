// models/Customer.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  customerFirstName: {
    type: String,
    required: true,
  },
  customerLastName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerMobile: {
    type: String,
    required: true,
  },
  customerStatus: {
    type: Number,
    required: true,
  },
  regDate: {
    type: Date,
    default: Date.now,
  },
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
