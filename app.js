require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', require('./server/routes/main.js'));

app.listen(PORT, 'localhost', () => {
  console.log(`The server start at : http://localhost:${PORT}`);
});

