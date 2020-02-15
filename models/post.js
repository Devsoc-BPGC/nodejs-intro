const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    description : String,
    date: { type:Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
