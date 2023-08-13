// routes/categoryRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Category = require('../models/Category');

const router = express.Router();

// Get all categories (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch categories' });
  }
});

// Create a new category (protected route)
router.post('/', requireAuth, async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create category' });
  }
});

// Update a category (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true });
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update category' });
  }
});

// Delete a category (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const categoryId = req.params.id;
    await Category.findByIdAndDelete(categoryId);
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category' });
  }
});

module.exports = router;
