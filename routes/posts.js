const express = require('express');
const router = express.Router();

// @route     GET /posts
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Handling GET requests to /posts'
    });
});

// @route     POST /posts
router.post('/', (req, res) => {
    res.status(201).json({
        message: 'Handling POST requests to /posts'
    });
});

// @route     GET /posts/:postId
router.get('/:postId', (req, res) => {
    postId = req.params.postId
    res.status(200).json({
        message: "Post details",
        postId: postId
    });
});

// @route     PATCH /posts/:postId
router.put('/:postId', (req, res) => {
    postId = req.params.postId
    res.status(200).json({
        message: `Updated product with id ${postId}!`
    });
});

// @route     DELETE /posts/:postId
router.delete('/:postId', (req, res) => {
    postId = req.params.postId
    res.status(200).json({
        message: "Deleted post",
        postId: postId
    });
});

module.exports = router;