const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes');
const branchRoutes = require('./routes/branchRoutes'); 
const itemRoutes = require('./routes/itemRoutes');
const subCategoryRoutes = require('./routes/subCategoryRoutes'); 
const categoryRoutes = require('./routes/categoryRoutes');
const branchCategoryRoutes = require('./routes/branchCategoryRoutes');
const itemExtrasRoutes = require('./routes/itemExtrasRoutes');
const extrasRoutes = require('./routes/extrasRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Create the Express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/branches', branchRoutes); 
app.use('/api/items', itemRoutes);
app.use('/api/subcategories', subCategoryRoutes); 
app.use('/api/categories', categoryRoutes);
app.use('/api/branchcategories', branchCategoryRoutes);
app.use('/api/itemextras', itemExtrasRoutes);
app.use('/api/extras', extrasRoutes);
app.use('/api/orders', orderRoutes);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
