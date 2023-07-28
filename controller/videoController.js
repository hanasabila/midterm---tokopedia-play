const mongoose = require('mongoose');
const video = require('../models/videoModel');
    

// function to show all video
const allVideo  = async (req, res) => {
    try {
        const videos = await video.find();
        res.json(videos);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'No video availabe.' });
    }
};

// function to add video
const addVideo = async (req, res) => {
    try {
        const { imgURL } = req.body;
        const addVideo = new video({
        imgURL
    })
    const savedVideo = await addVideo.save();
    res.json({ message: 'Video successfully added.', savedVideo});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add video.'});
    }
};

module.exports = { allVideo, addVideo };