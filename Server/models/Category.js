// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  categoryNameEN: {
    type: String,
    required: true,
  },
  categoryNameAR: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  orderIndex: {
    type: Number,
    required: true,
  },
  categoryImage: {
    type: String,
    default: null,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
