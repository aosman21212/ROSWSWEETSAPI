// routes/branchRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Branch = require('../models/Branch');

const router = express.Router();

// Get all branches (protected route)
router.get('/', requireAuth, async (req, res) => {
  try {
    const branches = await Branch.find({});
    res.json(branches);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch branches' });
  }
});

// Create a new branch (protected route)
router.post('/', requireAuth, async (req, res) => {
    try {
      const { branchNameEn, branchNameAr } = req.body;
  
      // Check if a branch with the given name already exists
      const existingBranch = await Branch.findOne({ $or: [{ branchNameEn }, { branchNameAr }] });
      if (existingBranch) {
        return res.status(400).json({ message: 'A branch with the same name already exists' });
      }
  
      // Create and save the new branch
      const newBranch = new Branch(req.body);
      await newBranch.save();
      res.status(201).json(newBranch);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create branch' });
    }
  });

// Update a branch (protected route)
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const branchId = req.params.id;
    const updatedBranch = await Branch.findByIdAndUpdate(branchId, req.body, { new: true });
    res.json(updatedBranch);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update branch' });
  }
});

// Delete a branch (protected route)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const branchId = req.params.id;
    await Branch.findByIdAndDelete(branchId);
    res.json({ message: 'Branch deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete branch' });
  }
});

module.exports = router;
