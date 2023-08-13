// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  userFullName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userMobile: {
    type: String,
    required: true,
  },
  accountStatus: {
    type: Number,
    required: true,
  },
  accountType: {
    type: Number,
    required: true,
  },
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
