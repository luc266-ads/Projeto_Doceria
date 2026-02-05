const pedidosModel = require('../models/pedidoModel');

function validatePedidoData(body) {
  const requiredFields = [
    'nomeCliente',
    'quantidade',
    'numeroProduto',
    'preco'
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
    nomeCliente: body.nomeCliente,
    quantidade: body.quantidade,
    numeroProduto: body.numeroProduto,
    preco: body.preco
  };

  return {
    isValid: true,
    data,
    missingFields: []
  };
}

function getPedidos(req, res) {
  const pedido = pedidosModel.getAllpedidos();

  return res.status(200).json({
    message: 'Lista de usuários retornada com sucesso.',
    quantidade: pedido.length,
    data: pedido
  });
}

function getPedidoById(req, res) {
  const idPedido = parseInt(req.params.idPedido, 10);

  if (Number.isNaN(idPedido)) {
    return res.status(400).json({
      message: 'ID do pedido inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const pedido = pedidosModel.getPedidoById(idPedido);

  if (!pedido) {
    return res.status(404).json({
      message: 'Pedido não encontrado.',
      detalhes: `Nenhum pedido foi encontrado com o ID ${idPedido}.`
    });
  }

  return res.status(200).json({
    message: 'Pedido encontrado com sucesso.',
    data: pedido
  });
}

function createPedido(req, res) {
  const { isValid, data, missingFields } = validatePedidoData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const pedido = pedidosModel.addPedido(data);

  return res.status(201).json({
    message: 'Pedido criado com sucesso.',
    data: pedido
  });
}

function updatePedido(req, res) {
  const idPedido = parseInt(req.params.idPedido, 10);

  if (Number.isNaN(idPedido)) {
    return res.status(400).json({
      message: 'ID do pedido inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const { isValid, data, missingFields } = validatePedidoData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const updatedPedido = pedidosModel.updatePedido(idPedido, data);

  if (!updatedPedido) {
    return res.status(404).json({
      message: 'Pedido não encontrado para atualização.',
      detalhes: `Nenhum pedido foi encontrado com o ID ${idPedido}.`
    });
  }

  return res.status(200).json({
    message: 'Pedido atualizado com sucesso.',
    data: updatedPedido
  });
}

function deletePedido(req, res) {
  const idPedido = parseInt(req.params.idPedido, 10);

  if (Number.isNaN(idPedido)) {
    return res.status(400).json({
      message: 'ID do pedido inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const deleted = pedidosModel.deletePedido(idPedido);

  if (!deleted) {
    return res.status(404).json({
      message: 'Pedido não encontrado para exclusão.',
      detalhes: `Nenhum pedido foi encontrado com o ID ${idPedido}.`
    });
  }

  return res.status(200).json({
    message: 'Pedido removido com sucesso.',
    data: null
  });
}

module.exports = {
  getPedidos,
  getPedidoById,
  createPedido,
  updatePedido,
  deletePedido
};