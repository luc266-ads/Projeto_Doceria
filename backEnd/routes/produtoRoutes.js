const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users - lista todos os usuários
router.get('/', userController.getUsers);

// GET /users/:id - busca um usuário específico
router.get('/:id', userController.getUserById);

// POST /users - cria um novo usuário
router.post('/', userController.createUser);

// PUT /users/:id - atualiza um usuário existente
router.put('/:id', userController.updateUser);

// DELETE /users/:id - remove um usuário
router.delete('/:id', userController.deleteUser);

module.exports = router;