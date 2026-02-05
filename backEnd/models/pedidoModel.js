let pedidos = [];
let nextId = 1;

function getAllpedidos() {
  return pedidos;
}

function getPedidoById(id) {
  return pedidos.find((pedido) => pedido.id === id);
}

function addPedido(pedidoData) {
  const pedido = {
    idPedido: nextId++,
    nomeCliente: pedidoData.nomeCliente,
    quantidade: pedidoData.quantidade,
    numeroProduto: pedidoData.numeroProduto,
    preco: pedidoData.preco
  };

  pedidos.push(pedido);
  return pedido;
}

function updatePedido(id, pedidoData) {
  const index = pedidos.findIndex((pedido) => pedido.id === id);

  if (index === -1) {
    return null;
  }

  const updatedPedido = {
    ...pedidos[index],
    nomeCliente: pedidoData.nomeCliente,
    quantidade: pedidoData.quantidade,
    numeroProduto: pedidoData.numeroProduto,
    preco: pedidoData.preco
   
  };

  pedidos[index] = updatedPedido;
  return updatedPedido;
}

function deletePedido(id) {
  const index = pedidos.findIndex((pedido) => pedido.id === id);

  if (index === -1) {
    return false;
  }

  pedidos.splice(index, 1);
  return true;
}

module.exports = {
  getAllpedidos,
  getPedidoById,
  addPedido,
  updatePedido,
  deletePedido
};