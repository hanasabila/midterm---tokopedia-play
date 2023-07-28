const mongoose = require('mongoose');
const Comment = require('../models/commentModel');

// function to show comments
const getComment = async (req, res) => {
    try {
        const comments = await Comment.find({
            videoID: req.params.videoID
        });
        res.json(comments);
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Comment not found.' });
    }
}


// function to add comments
const addComment = async (req, res) => {
    try {
        const { videoID } = req.params;
        const { username, comment } = req.body;
        const addComment = new Comment({
            videoID,
            username,
            comment
        })
        const savedComment = await addComment.save();
        res.json({ message: 'Comment successfully added', savedComment});
    }
    catch(error) {
        console.log(error.message);
        res.status(500).json({ message: 'Failed to add comment.'});
    }
};

module.exports = { addComment, getComment };
