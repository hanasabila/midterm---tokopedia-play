const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    videoID: Number,
    imgURL: String,
});

module.exports = mongoose.model('video', videoSchema);