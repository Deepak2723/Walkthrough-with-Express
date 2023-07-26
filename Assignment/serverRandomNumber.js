// Step 1: Import the required modules
const express = require('express');

// Step 2: Create the Express application
const app = express();
const port = 3000;

// Step 3: Define API endpoint to generate a random number
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generates a random number between 0 and 99
  res.json({ random: randomNumber });
});

// Step 4: Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
