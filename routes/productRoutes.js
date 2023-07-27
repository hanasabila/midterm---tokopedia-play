const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// show all products
router.get("/products", productController.allProduct);

// add video
router.post("/add-product", productController.addProduct);

module.exports = router;