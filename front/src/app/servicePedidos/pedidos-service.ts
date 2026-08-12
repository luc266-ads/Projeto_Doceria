import { Injectable } from '@angular/core';
import { Api } from '../serviceApi/api';

interface PedidoEntrega {
  nomeUser: string;
  enderecoUser: string;
  complementoUser: string;
  bairroUser: string;
  numeroUser: string;
  precoTotal: number;
  formaPagmento: string;
}

@Injectable({
  providedIn: 'root',
})
export class PedidosService {

  constructor(private api :Api) {

  }

  dadosPerdidos: PedidoEntrega[] = [];




  buscarPedidos() {
    return this.api.listarPedidos();
  }

  criarPedido(pedido: any) {
    return this.api.cadastrarPedidos(pedido);
  }
  
 
}


