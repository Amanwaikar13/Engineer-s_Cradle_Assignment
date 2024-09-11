const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    credentials: true, // Enable sending cookies and credentials
  }));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
