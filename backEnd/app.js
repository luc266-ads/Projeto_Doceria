const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// Rotas
app.use('/users', userRoutes);

module.exports = app;