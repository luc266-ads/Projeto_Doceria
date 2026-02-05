const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');

app.use(express.json());


// Rotas
app.use('/users', userRoutes);
app.use('/pedidos', pedidoRoutes);

module.exports = app ;
