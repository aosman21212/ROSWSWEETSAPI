// models/SubCategory.js
const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema({
  subCatNameEN: {
    type: String,
    required: true,
  },
  subCatNameAR: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
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
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = SubCategory;
