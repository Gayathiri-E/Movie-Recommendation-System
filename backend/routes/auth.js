// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route for user signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route for user login (to be implemented similarly)
// Ensure to handle password encryption and user validation securely

module.exports = router;
