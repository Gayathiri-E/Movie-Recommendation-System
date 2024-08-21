// backend/routes/auth.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route for user signup
router.post('/signup', async (req, res) => {
  try {
    const { username, password,email } = req.body;

    const newUser = new User({ username, password,email});
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Route for user signup
// router.post('/signup', async (req, res) => {
//   try {
//     const { username, password, email } = req.body;

//     const newUser = new User({ username, password, email });
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;
