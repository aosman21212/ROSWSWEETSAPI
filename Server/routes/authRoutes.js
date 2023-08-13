// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();
const Admin = require('../models/Admin');

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { userFullName, userEmail, userPassword, userMobile, accountStatus, accountType } = req.body;

    // Check if the user already exists
    const existingUser = await Admin.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltRounds);

    // Create a new admin user
    const newAdmin = new Admin({
      userFullName,
      userEmail,
      userPassword: hashedPassword,
      userMobile,
      accountStatus,
      accountType,
    });

    // Save the admin user to the database
    await newAdmin.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Find the admin user by email
    const admin = await Admin.findOne({ userEmail });

    // Check if the user exists
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check the password
    const passwordMatch = await bcrypt.compare(userPassword, admin.userPassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    
    // Generate a JWT token with expiration time
    const token = jwt.sign({ userId: admin._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});

module.exports = router;
