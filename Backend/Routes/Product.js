// routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../Model/Product');

// Route 1: Get products for homepage (basic data)
router.get('/home', async (req, res) => {
  try {
    const products = await Product.find({}, 'title image button'); // only necessary fields
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
});

// Route 2: Get full product details by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product details', error: err });
  }
});

module.exports = router;
