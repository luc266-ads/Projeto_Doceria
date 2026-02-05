const express = require('express');
const router = express.Router();
const pedidoController = require('../controllers/pedidoController');

// ENDPOINTS DE PEDIDOS

// GET /pedidos - lista todos os Pedidos
router.get('/', pedidoController.getPedidos);

// GET /pedidos/:id - busca um pedido específico
router.get('/:id', pedidoController.getPedidoById);

// POST /pedidos - cria um novo pedido
router.post('/', pedidoController.createPedido);

// PUT /pedidos/:id - atualiza um pedido existente
router.put('/:id', pedidoController.updatePedido);

// DELETE /pedidos/:id - remove um pedido
router.delete('/:id', pedidoController.deletePedido);

module.exports = router;