
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/movieRecommendationDB")
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.error('MongoDB connection error'))

// app.use(cors()); // Enable CORS
// app.use(express.json());

// const authRoutes = require('./routes/auth');
// app.use('/api/auth', authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/movieRecommendationDB")
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error'));

app.use(cors()); // Enable CORS
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
