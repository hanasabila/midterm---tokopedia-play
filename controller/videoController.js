const mongoose = require('mongoose');
const video = mongoose.model('video');

const allVideo  = async (req, res) => {
    try {
        const videos = await video.find();
        res.json(videos);
    }
    catch(error) {
        res.status(500).json({ message: 'No video availabe.'});
    }
};

module.exports = { allVideo };