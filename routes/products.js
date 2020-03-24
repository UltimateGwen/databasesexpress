const express = require('express');
const router = express.Router();

// Import DB connection
const connection = require('../config/db');

// @route   GET /products
// @desc    Get all products
// @access  Public
// @params  No params
router.get('/', (req, res) => {
  connection.query('SELECT * FROM products', (err, result) => {
    if (err) throw err;

    res.send(result);
  });
});

// @route   GET /:id
// @desc    Get single products
// @access  Public
// @params  id
router.get('/:id', (req, res) => {
  connection.query(
    'SELECT * FROM products WHERE id = ?',
    req.params.id,
    (err, result) => {
      if (err) throw err;

      res.send(result);
    }
  );
});

module.exports = router;
