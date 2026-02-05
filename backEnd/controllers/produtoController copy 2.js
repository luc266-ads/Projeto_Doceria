const userModel = require('../models/userModel');

function validateUserData(body) {
  const requiredFields = [
    'nomeUser',
    'telefone',
    'enderenco',
    'complemento',
    'numeroResidencia'
  ];

  const missingFields = requiredFields.filter((field) => {
    const value = body[field];
    return value === undefined || value === null || String(value).trim() === '';
  });

  if (missingFields.length > 0) {
    return {
      isValid: false,
      data: null,
      missingFields
    };
  }

  const data = {
    nomeUser: body.nomeUser,
    telefone: body.telefone,
    enderenco: body.enderenco,
    complemento: body.complemento,
    numeroResidencia: body.numeroResidencia
  };

  return {
    isValid: true,
    data,
    missingFields: []
  };
}

function getUsers(req, res) {
  const users = userModel.getAllUsers();

  return res.status(200).json({
    message: 'Lista de usuários retornada com sucesso.',
    quantidade: users.length,
    data: users
  });
}

function getUserById(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID de usuário inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const user = userModel.getUserById(id);

  if (!user) {
    return res.status(404).json({
      message: 'Usuário não encontrado.',
      detalhes: `Nenhum usuário foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Usuário encontrado com sucesso.',
    data: user
  });
}

function createUser(req, res) {
  const { isValid, data, missingFields } = validateUserData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const user = userModel.addUser(data);

  return res.status(201).json({
    message: 'Usuário criado com sucesso.',
    data: user
  });
}

function updateUser(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID de usuário inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const { isValid, data, missingFields } = validateUserData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const updatedUser = userModel.updateUser(id, data);

  if (!updatedUser) {
    return res.status(404).json({
      message: 'Usuário não encontrado para atualização.',
      detalhes: `Nenhum usuário foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Usuário atualizado com sucesso.',
    data: updatedUser
  });
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID de usuário inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const deleted = userModel.deleteUser(id);

  if (!deleted) {
    return res.status(404).json({
      message: 'Usuário não encontrado para exclusão.',
      detalhes: `Nenhum usuário foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Usuário removido com sucesso.',
    data: null
  });
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};