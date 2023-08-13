// routes/subCategoryRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const SubCategory = require('../models/SubCategory');

const router = express.Router();

// Get all subcategories (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const subcategories = await SubCategory.find({});
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch subcategories' });
  }
});

// Create a new subcategory (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newSubCategory = new SubCategory(req.body);
    await newSubCategory.save();
    res.status(201).json(newSubCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create subcategory' });
  }
});

// Update a subcategory (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(subCategoryId, req.body, { new: true });
    res.json(updatedSubCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update subcategory' });
  }
});

// Delete a subcategory (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const subCategoryId = req.params.id;
    await SubCategory.findByIdAndDelete(subCategoryId);
    res.json({ message: 'Subcategory deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete subcategory' });
  }
});

module.exports = router;
