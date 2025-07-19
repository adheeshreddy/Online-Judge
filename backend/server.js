const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/online_judge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Define the submission route
app.post('/api/submit', (req, res) => {
  const { userId, problemId, code, language } = req.body;
  if (!userId || !problemId || !code || !language) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Example: just respond back for now
  res.json({ message: 'Submission received', data: req.body });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
