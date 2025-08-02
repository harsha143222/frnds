const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve hii.html at root if not in public
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'hii.html'));
});

// API to generate hearts
app.get('/hearts', (req, res) => {
  res.json({ count: 10 }); // You can randomize this if you want
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});