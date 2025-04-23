const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });


    const user = new User({ username, email, password });
    await user.save();

   
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '30d' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
