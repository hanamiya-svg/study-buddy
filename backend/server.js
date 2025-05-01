import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Buddy from './model/buddy.js'; // Your MongoDB model

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/buddydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Enable CORS
app.use(cors());

// Define a route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Study Buddy API!');
});

// API route to fetch all buddies
app.get('/api/buddies', async (req, res) => {
  try {
    const buddies = await Buddy.find(); // Fetch all data
    res.json(buddies);  // Send the data as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
