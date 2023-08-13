// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
  orderAmount: {
    type: Number,
    required: true,
  },
  branchId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch',
    required: true,
  },
  orderType: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: Number,
    required: true,
  },
  paymentRefNo: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  customerLocation: {
    type: String,
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
  },
  cartSummary: {
    type: String,
    required: true,
  },
  WAUserId: {
    type: String,
    required: true,
  },
  WABotId: {
    type: Number,
    required: true,
  },
  WAConversationId: {
    type: Number,
    required: true,
  },
  invoiceNumber: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
