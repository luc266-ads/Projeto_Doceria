const produtoModel = require('../models/produtoModel');

function validateProdutoData(body) {
  const requiredFields = [
    "nomeProduto" ,
    "descricao",
    "quantidade",
    "precoUnid" 
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
    nomeProduto: body.nomeProduto,
    descricao: body.descricao,
    quantidade: body.quantidade,
    precoUnid: body.precoUnid,
  };

  return {
    isValid: true,
    data,
    missingFields: []
  };
}

function getProdutos(req, res) {
  const produtos = produtoModel.getAllProdutos();

  return res.status(200).json({
    message: 'Lista de Produtos retornada com sucesso.',
    quantidade: produtos.length,
    data: produtos
  });
}

function getProdutoById(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID do produto inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const produto = produtoModel.getProdutoById(id);

  if (!produto) {
    return res.status(404).json({
      message: 'Produto não encontrado.',
      detalhes: `Nenhum Produto foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Produto encontrado com sucesso.',
    data: produto
  });
}

function createProduto(req, res) {
  const { isValid, data, missingFields } = validateProdutoData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const produto = produtoModel.addProduto(data);

  return res.status(201).json({
    message: 'Produto criado com sucesso.',
    data: produto
  });
}

function updateProduto(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID do produto inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const { isValid, data, missingFields } = validateProdutoData(req.body);

  if (!isValid) {
    return res.status(400).json({
      message: 'Erro de validação: campos obrigatórios não informados.',
      camposObrigatorios: missingFields
    });
  }

  const updatedProduto = produtoModel.updateProduto(id, data);

  if (!updatedProduto) {
    return res.status(404).json({
      message: 'Produto não encontrado para atualização.',
      detalhes: `Nenhum produto foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Produto atualizado com sucesso.',
    data: updatedProduto
  });
}

function deleteProduto(req, res) {
  const id = parseInt(req.params.id, 10);

  if (Number.isNaN(id)) {
    return res.status(400).json({
      message: 'ID do produto inválido.',
      detalhes: 'O parâmetro "id" deve ser um número inteiro.'
    });
  }

  const deleted = produtoModel.deleteProduto(id);

  if (!deleted) {
    return res.status(404).json({
      message: 'Produto não encontrado para exclusão.',
      detalhes: `Nenhum produto foi encontrado com o ID ${id}.`
    });
  }

  return res.status(200).json({
    message: 'Produto removido com sucesso.',
    data: null
  });
}

module.exports = {
  getProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto
};