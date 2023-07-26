// Step 1: Import the required modules
const http = require('http');

// Step 2: Create an array of dummy products data (men and women)
const menProducts = [
  { id: 1, name: 'Men Product 1', price: 25 },
  { id: 2, name: 'Men Product 2', price: 30 },
  // Add more products...
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', price: 20 },
  { id: 2, name: 'Women Product 2', price: 35 },
  // Add more products...
];

// Step 3: Create the HTTP server
const server = http.createServer((req, res) => {
  // Step 4: Define the API endpoints
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/men') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Step 5: Start the server and make it listen on port 3000
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
