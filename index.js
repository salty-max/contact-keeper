const express = require('express');
const connectDatabase = require('./config/db');

const app = require('./app');

// Connect database
connectDatabase();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(process.env.NODE_ENV));
