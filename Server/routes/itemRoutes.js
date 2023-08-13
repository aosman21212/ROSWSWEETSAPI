// routes/itemRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Item = require('../models/Item');

const router = express.Router();

// Get all items (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

// Create a new item (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create item' });
  }
});

// Update an item (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update item' });
  }
});

// Delete an item (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const itemId = req.params.id;
    await Item.findByIdAndDelete(itemId);
    res.json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item' });
  }
});

module.exports = router;
