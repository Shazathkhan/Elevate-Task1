const express = require('express');
const app = express();

// Middleware (optional logging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});

module.exports = app;
