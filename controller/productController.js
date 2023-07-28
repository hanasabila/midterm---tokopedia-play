const mongoose = require('mongoose');
const Product = require('../models/productModel');

// function to show product
const getProduct = async (req, res) => {
    try {
        const products = await Product.find({ 
            videoID: req.params.videoID });
        res.json(products);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'No product available.' });
    }
};

// function to add product
const addProduct = async (req, res) => {
    try {
        const { videoID } = req.params;
        const { productID, url, title, price } = req.body;
        const addProduct = new Product({
            videoID,
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

module.exports = { getProduct, addProduct };