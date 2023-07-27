const express = require('express');
const router = express.Router();
const cors = require('cors');
const videoController = require('../controller/videoController');
const video = require('../models/videoModel');

router.get("/video", videoController.allVideo);


module.exports = router;
