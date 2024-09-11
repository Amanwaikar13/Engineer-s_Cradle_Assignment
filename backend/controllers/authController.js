const User = require('../models/User'); // Adjust the path as needed
const bcrypt = require('bcryptjs'); // For password hashing
const jwt = require('jsonwebtoken'); // For generating JWT tokens

// Signup Controller
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log('Request body:', req.body);
    const user = await User.findOne({ email });
    console.log('Fetched user:', user);
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Add password verification and other logic here
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { signup, login };
