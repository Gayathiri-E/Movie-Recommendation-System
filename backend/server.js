// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the useCreateIndex option
  // useCreateIndex: true, <-- Remove this line
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

