// ✅ app.js
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const problemRoutes = require('./routes/problemRoutes');
const solutionRoutes = require('./routes/solutionRoutes');

// Route handlers
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/solutions', solutionRoutes);

// Health check
app.get('/', (req, res) => {
  res.send("✅ Online Judge Backend Running");
});

module.exports = app;