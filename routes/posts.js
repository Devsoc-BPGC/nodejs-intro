const express = require('express');
const router = express.Router();
const Post = require("../models/post");


// @route     GET /posts
router.get('/', async (req, res) => {
    try {
        posts = await Post.find()
        res.status(200).json({
            success: true,
            posts: posts,
            message: "Here are all the posts."
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error :("
        });
    }
});

// @route     POST /posts
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        postSaved = await post.save()
        res.status(201).json({
            success: true,
            post: postSaved,
            message: "Post saved!"
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error :("
        });  
    }
});

// @route     GET /posts/:postId
router.get('/:postId', async (req, res) => {
    postId = req.params.postId
    try {
        post = await Post.findById(postId)
        res.status(200).json({
            success: true,
            message: "Post details",
            post: post
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Internal server error :("
        });
    }
});

// @route     PATCH /posts/:postId
router.put('/:postId', async (req, res) => {
    postId = req.params.postId
    const postUpdated = {
        title: req.body.title,
        description: req.body.description
    }
    try {
        updatedPost = await Post.update({ _id: postId }, { $set: postUpdated })
        res.status(200).json({
            success: true,
            message: `Updated product with id ${postId}!`,
            updatedPost: updatedPost
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error :("
        });
    }
});

// @route     DELETE /posts/:postId
router.delete('/:postId', async (req, res) => {
    postId = req.params.postId
    try {
        deleteStatus = await Post.deleteOne({ _id: postId })
        res.status(200).json({
            message: "Post deleted :(",
            deleteStatus: deleteStatus 
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal server error ;)"
        });
    }
});

module.exports = router;