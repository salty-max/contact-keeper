import express from 'express';
import connectDatabase from '../config/db';

import app from './app';

// Connect database
connectDatabase();

// Init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(process.env.NODE_ENV));
