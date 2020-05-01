const express = require('express');
const router = express.Router();

const Product = require('../models/product.model');
const Category = require('../models/category.model');

router.get('/products', async (req, res) => {
  try {
    const result = await Product.find().populate({
      path: 'category',
      model: Category,
      select: 'name -_id',
    });
    if (!result) res.status(404).json({ Product: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const result = await Product.findById(req.params.id);
    if (!result) res.status(404).json({ Product: 'Not found' });
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
