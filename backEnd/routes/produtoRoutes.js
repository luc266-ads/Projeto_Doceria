const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

// GET /produtos - lista todos os produtos
router.get('/', produtoController.getProdutos);

// GET /produtos/:id - busca um produto específico
router.get('/:id', produtoController.getProdutoById);

// POST /produtos - cria um novo produto
router.post('/', produtoController.createProduto);

// PUT /produtos/:id - atualiza um produto existente
router.put('/:id', produtoController.updateProduto);

// DELETE /produtos/:id - remove um produto
router.delete('/:id', produtoController.deleteProduto);

module.exports = router;