const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

app.use(express.json());


// Rotas
app.use('/users', userRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/produtos', produtoRoutes);

module.exports = app ;
