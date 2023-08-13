// models/Item.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategory',
  },
  itemNameEn: {
    type: String,
    required: true,
  },
  itemNameAr: {
    type: String,
    default: null,
  },
  itemDescEn: {
    type: String,
    required: true,
  },
  itemDescAr: {
    type: String,
    default: null,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  orderIndex: {
    type: Number,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
  itemStatus: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
