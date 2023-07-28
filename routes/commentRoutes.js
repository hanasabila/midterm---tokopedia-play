const express = require('express');
const router = express.Router();
const commentController = require('../controller/commentController');

// add comment
router.post("/:videoID/add-comment", commentController.addComment);

// show comment list
router.get("/:videoID/get-comment", commentController.getComment);


module.exports = router;