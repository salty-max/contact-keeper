import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => res.json({
  message: 'Hello World to the Contact Keeper API!',
}));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

module.exports = app;
