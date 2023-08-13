// routes/customerRoutes.js
const express = require('express');
const Customer = require('../models/Customer');

const router = express.Router();

// Get all customers (accessible without authentication)
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch customers' });
  }
});

// Get a single customer by ID (accessible without authentication)
router.get('/:id', async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch customer' });
  }
});

// Create a new customer
router.post('/', async (req, res) => {
    try {
      const newCustomer = new Customer(req.body);
      await newCustomer.save();
      res.status(201).json(newCustomer);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create customer' });
    }
  });
  
  // Update a customer
router.put('/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
      const updatedCustomer = await Customer.findByIdAndUpdate(customerId, req.body, { new: true });
      if (!updatedCustomer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.json(updatedCustomer);
    } catch (err) {
      res.status(500).json({ message: 'Failed to update customer' });
    }
  });
  

// Delete a customer
router.delete('/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
      const deletedCustomer = await Customer.findByIdAndDelete(customerId);
      if (!deletedCustomer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
      res.json({ message: 'Customer deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete customer' });
    }
  });
  
  module.exports = router;
