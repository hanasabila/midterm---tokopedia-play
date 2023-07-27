const mongoose = require('mongoose');
const product = require('../models/productModel');

// function to show product
const allProduct = async (req, res) => {
    try {
        const products = await product.find({ videoID: req.params.videoID });
        res.json(products);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'No product available' });
    }
};

// function to aa product
const addProduct = async (req, res) => {
    try {
        const { productID, url, title, price } = req.body;
        const addProduct = new product({
            productID,
            url,
            title,
            price
        })
        const savedProduct = await addProduct.save();
        res.json({ message: 'Product successfully added.', savedProduct });
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add product' });
    }
};

module.exports = { allProduct, addProduct };