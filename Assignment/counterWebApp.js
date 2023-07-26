// Step 1: Import the required modules
const express = require('express');

// Step 2: Create the Express application
const app = express();
const port = 3000;

// Step 3: Set up a simple in-memory counter variable
let counter = 0;

// Step 4: Define API endpoints
app.get('/', (req, res) => {
  // Endpoint to get the current counter data
  res.json({ counter: counter });
});

app.get('/increment', (req, res) => {
  // Endpoint to increment the counter by 1
  counter++;
  res.json({ counter: counter });
});

app.get('/decrement', (req, res) => {
  // Endpoint to decrement the counter by 1
  counter--;
  res.json({ counter: counter });
});

// Step 5: Start the server and make it listen on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
