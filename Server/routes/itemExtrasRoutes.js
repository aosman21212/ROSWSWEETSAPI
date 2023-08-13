// routes/itemExtrasRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const ItemExtras = require('../models/ItemExtras');

const router = express.Router();

// Get all item extras (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const itemExtras = await ItemExtras.find({});
    res.json(itemExtras);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch item extras' });
  }
});

// Create a new item extra (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newItemExtra = new ItemExtras(req.body);
    await newItemExtra.save();
    res.status(201).json(newItemExtra);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create item extra' });
  }
});

// Update an item extra (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const itemExtraId = req.params.id;
    const updatedItemExtra = await ItemExtras.findByIdAndUpdate(
      itemExtraId,
      req.body,
      { new: true }
    );
    res.json(updatedItemExtra);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update item extra' });
  }
});

// Delete an item extra (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const itemExtraId = req.params.id;
    await ItemExtras.findByIdAndDelete(itemExtraId);
    res.json({ message: 'Item extra deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete item extra' });
  }
});

module.exports = router;
