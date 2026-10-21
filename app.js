require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(req.method, req.url);
  res.send('Hello World');
  res.end();
});

app.listen(PORT, 'localhost', () => {
  console.log(`The server start at : http://localhost:${PORT}`);
});

