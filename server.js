const express = require('express');
const app = express();
const port = 5000; // Set the port to either the environment's port or 3000

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
