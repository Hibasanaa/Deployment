const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app (or public directory)
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle API routes or additional server-side logic here

// Serve the React app for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
