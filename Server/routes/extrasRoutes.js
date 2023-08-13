// routes/extrasRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Extras = require('../models/Extras');

const router = express.Router();

// Get all extras (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const extras = await Extras.find({});
    res.json(extras);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch extras' });
  }
});

// Create a new extra (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newExtra = new Extras(req.body);
    await newExtra.save();
    res.status(201).json(newExtra);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create extra' });
  }
});

// Update an extra (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const extraId = req.params.id;
    const updatedExtra = await Extras.findByIdAndUpdate(extraId, req.body, { new: true });
    res.json(updatedExtra);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update extra' });
  }
});

// Delete an extra (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const extraId = req.params.id;
    await Extras.findByIdAndDelete(extraId);
    res.json({ message: 'Extra deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete extra' });
  }
});

module.exports = router;
