// routes/adminRoutes.js
const express = require('express');
const { requireAuth } = require('../middlewares/authMiddleware');
const Admin = require('../models/Admin');

const router = express.Router();



// Create a new admin user
router.post('/', requireAuth, async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create admin user' });
  }
});

// Update an admin user
router.put('/:id', requireAuth, async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, req.body, { new: true });
    res.json(updatedAdmin);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update admin user' });
  }
});

// Delete an admin user
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const adminId = req.params.id;
    await Admin.findByIdAndDelete(adminId);
    res.json({ message: 'Admin user deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete admin user' });
  }
});

module.exports = router;
