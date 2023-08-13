// routes/orderRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Order = require('../models/Order');

const router = express.Router();

// Get all orders (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
});

// Create a new order (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create order' });
  }
});

// Update an order (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, { new: true });
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update order' });
  }
});

// Delete an order (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId);
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete order' });
  }
});

module.exports = router;
