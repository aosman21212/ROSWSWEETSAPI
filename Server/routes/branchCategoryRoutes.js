// routes/branchCategoryRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const BranchCategory = require('../models/BranchCategory');

const router = express.Router();

// Get all branch categories (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const branchCategories = await BranchCategory.find({});
    res.json(branchCategories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch branch categories' });
  }
});

// Create a new branch category (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newBranchCategory = new BranchCategory(req.body);
    await newBranchCategory.save();
    res.status(201).json(newBranchCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create branch category' });
  }
});

// Update a branch category (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const branchCategoryId = req.params.id;
    const updatedBranchCategory = await BranchCategory.findByIdAndUpdate(
      branchCategoryId,
      req.body,
      { new: true }
    );
    res.json(updatedBranchCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update branch category' });
  }
});

// Delete a branch category (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const branchCategoryId = req.params.id;
    await BranchCategory.findByIdAndDelete(branchCategoryId);
    res.json({ message: 'Branch category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete branch category' });
  }
});

module.exports = router;
