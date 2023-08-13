// models/BranchCategory.js
const mongoose = require('mongoose');

const branchCategorySchema = new mongoose.Schema({
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
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
});

const BranchCategory = mongoose.model('BranchCategory', branchCategorySchema);

module.exports = BranchCategory;
