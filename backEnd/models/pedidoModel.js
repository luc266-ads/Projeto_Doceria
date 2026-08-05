let pedidos = [];
let nextId = 1;

function getAllpedidos() {
  return pedidos;
}

function getPedidoById(id) {
  return pedidos.find((pedido) => pedido.idPedido === id);
}

function addPedido(pedidoData) {
  const pedido = {
    idPedido: nextId++,
    nomeCliente: pedidoData.nomeCliente,
    enderecoCliente: pedidoData.enderecoCliente,
    complementoCliente: pedidoData.complementoCliente,
    numeroRdCliente: pedidoData.numeroRdCliente,
    precoTotal: pedidoData.precoTotal,
    formaPagamento: pedidoData.formaPagamento,
  };

  pedidos.push(pedido);
  return pedido;
}

function updatePedido(id, pedidoData) {
  const index = pedidos.findIndex((pedido) => pedido.idPedido === id);

  if (index === -1) {
    return null;
  }

  const updatedPedido = {
    ...pedidos[index],
    nomeCliente: pedidoData.nomeCliente,
    enderecoCliente: pedidoData.enderecoCliente,
    complementoCliente: pedidoData.complementoCliente,
    numeroRdCliente: pedidoData.numeroRdCliente,
    precoTotal: pedidoData.precoTotal,
    formaPagamento: pedidoData.formaPagamento,
   
  };

  pedidos[index] = updatedPedido;
  return updatedPedido;
}

function deletePedido(id) {
  const index = pedidos.findIndex((pedido) => pedido.idPedido === id);

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