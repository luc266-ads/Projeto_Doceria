let produtos = [];
let nextId = 1;

function getAllProdutos() {
  return produtos;
}

function getProdutoById(id) {
  return produtos.find((produto) => produto.id === id);
}

function addProduto(produtoData) {
  const produto = {
    idProduto: nextId++,
    nomeProduto: produtoData.nomeProduto,
    descricao: produtoData.descricao,
    quantidade: produtoData.quantidade,
    precoUnid: produtoData.precoUnid,
  };

  produtos.push(produto);
  return produto;
}

function updateProduto(id, produtoData) {
  const index = produtos.findIndex((produto) => produto.idProduto === id);

  if (index === -1) {
    return null;
  }

  const updatedproduto = {
    ...produtos[index],
    nomeProduto: produtoData.nomeProduto,
    descricao: produtoData.descricao,
    quantidade: produtoData.quantidade,
    precoUnid: produtoData.precoUnid,
  };

  produtos[index] = updatedproduto;
  return updatedproduto;
}

function deleteProduto(id) {
  const index = produtos.findIndex((produto) => produto.idProduto === id);

  if (index === -1) {
    return false;
  }

  produtos.splice(index, 1);
  return true;
}

module.exports = {
  getAllProdutos,
  getProdutoById,
  addProduto,
  updateProduto,
  deleteProduto
};