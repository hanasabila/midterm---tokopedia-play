const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productID: {
            required: true,
            type: Number,
        },
        url: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        price: {
            required: true,
            type: String,
        },
        
    });

module.exports = mongoose.model('product', productSchema);