const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// show all products
router.get("/:videoID/products", productController.getProduct);

// add video
router.post("/:videoID/add-product", productController.addProduct);

module.exports = router;