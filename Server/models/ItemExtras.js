// models/ItemExtras.js
const mongoose = require('mongoose');

const itemExtrasSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true,
  },
  extraId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Extras',
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const ItemExtras = mongoose.model('ItemExtras', itemExtrasSchema);

module.exports = ItemExtras;
