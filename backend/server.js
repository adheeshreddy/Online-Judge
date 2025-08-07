// ✅ server.js
const mongoose = require('mongoose');
const app = require('./app'); // Import the app from app.js

const PORT = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/online_judge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});