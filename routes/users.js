const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('config')

// @route   POST /user/register
// @desc    Register user
router.post("/register", async (req, res) => {

    const create_obj = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }
    for( var i in create_obj ) {
      if(!create_obj[i]) {
        return res.status(404).json({
          success: false,
          msg: 'All fields are mandatory'
        })
      }
    }
    // Check if user already exists
    const emailExist = await User.findOne({
      email: req.body.email.toLowerCase()
    });
  
    if (emailExist) {
      return res.status(400).json({"error": "Email already exists"});
    }

    // Hash passwords
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    // Create a new user 
    let user = new User({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      password: hashedPassword,
      posts: []
    });
    try {
      userSaved = await user.save()
      const TOKEN_SECRET = config.get("TOKEN_SECRET")
      const token = jwt.sign({_id: userSaved._id}, TOKEN_SECRET);
      return res.status(200).json({
      success: true,
      msg: "Registration successful!",
      user: userSaved
    });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        msg: "Internal server error."
      })
    }
});
  
  
  // @route   POST /user/login
  // @desc    Login user
  router.post("/login", async (req, res) => {
    const create_obj = {
      email: req.body.email,
      password: req.body.password
    }
    for( var i in create_obj ) {
      if(!create_obj[i]) {
        return res.status(404).json({
          success: false,
          msg: 'All fields are mandatory'
        })
      }
    }
    try {
      user = await User.findOne({ email: req.body.email.toLowerCase() })
      if (!user) {
        return res.status(400).json({"error": "Email or the password is wrong"});
      }
      // Check if passord is correct
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if (!validPass){
        return res.status(400).json({"error": "Email or the password is wrong"});
      }
    
      // Create and assign a token
      const TOKEN_SECRET = config.get("TOKEN_SECRET")
      const token = jwt.sign({_id: user._id}, TOKEN_SECRET);
      res.json({
        "user_id": user._id,
        "auth-token": token
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        msg: "Internal server error."
      })
    }
  });

  module.exports = router;