const express = require('express');
const router = express.Router();
const videoController = require('../controller/videoController');

// show all videos
router.get("/videos", videoController.allVideo);

// add video
router.post("/add-video", videoController.addVideo);


module.exports = router;
