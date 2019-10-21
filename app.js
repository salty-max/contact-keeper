const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const app = express();
app.use(bodyParser.json());

if (isProd) {
  const buildPath = path.resolve(__dirname, 'client/build');
  const indexHtml = path.join(buildPath, 'index.html');

  app.use(express.static(buildPath));

  app.get('*', (req, res) => res.sendFile(indexHtml));
} else {
  app.get('/', (req, res) => res.json({ message: 'Hello World to the Contact Keeper API!' }));
}

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

module.exports = app;
