import { Injectable } from '@angular/core';


interface ItemCarro {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem: string;
  categoria: string;
  selecionado: boolean;
}

interface PedidoEntrega {
  idUser: number;
  nomeUser: string;
  enderecoUser: string;
  complementoUser: string;
  bairroUser: string;
  numeroUser: string;
  precoTotal: number;
  formaPagmento: string;
}
interface EnderecoPrincipal {
  id: number;
  nomeDestinatario: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  cep: string;
  principal: boolean;
}

interface FormPagamento {
  pagamento: string;
}



@Injectable({
  providedIn: 'root',
})

export class carrinhoService {



  readonly taxaEntrega = 8;
  enderecoSelecionadoId: number | null = 1;

  nomeUser = " ";
  enderecoUser = " ";
  complementoUser = " ";
  bairroUser = " ";
  numeroUser = " ";
  cidadeUser = " ";
  cepUser = " ";
  precoTotal = 0;
  formaPagmento = " ";

  itens: ItemCarro[] = [];
  formPagamento: FormPagamento[] = [];
  dadosPedidos: PedidoEntrega[] = [];


  enderecos: EnderecoPrincipal[] = [
    {
      id: Date.now(),
      nomeDestinatario: 'Ana Souza',
      endereco: 'Rua das Palmeiras',
      numero: '245',
      complemento: 'Apto 302',
      bairro: 'Boa Viagem',
      cidade: 'Recife',
      cep: '51020-000',
      principal: true,
    },
  ];


  limparCarrinho() {
    this.itens = [];
  }

  get itensSelecionados(): ItemCarro[] {
    return this.itens.filter((item) => item.selecionado);
  }

  get todosMarcados(): boolean {
    return this.itens.length > 0 && this.itens.every((item) => item.selecionado);
  }

  get subtotal(): number {
    return this.itensSelecionados.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  }

  get qtdSelecionada(): number {
    return this.itensSelecionados.reduce((acc, item) => acc + item.quantidade, 0);
  }

  get checkoutTotal(): number {
    return this.subtotal + this.taxaEntrega;
  }

  get enderecoSelecionado(): EnderecoPrincipal | undefined {
    return this.enderecos.find((endereco) => endereco.id === this.enderecoSelecionadoId);
  }

  get temEndereco(): boolean {
    return !!this.enderecoSelecionado;
  }

  salvarPedido() {

    const id = this.enderecoSelecionado?.id ?? 0;
    const nome = this.enderecoSelecionado?.nomeDestinatario ?? "";
    const endereco = this.enderecoSelecionado?.endereco ?? "";
    const complemento = this.enderecoSelecionado?.complemento ?? "";
    const bairro = this.enderecoSelecionado?.bairro ?? "";
    const numero = this.enderecoSelecionado?.numero ?? "";

    this.dadosPedidos = [{

      idUser: id,
      nomeUser: "",
      enderecoUser: "",
      complementoUser: "",
      bairroUser: "",
      numeroUser: "",
      precoTotal: 0,
      formaPagmento: "",

    }]
      
 
    const pedidos = this.dadosPedidos.map(pedido =>
      pedido.idUser === id
        ? {
          ...pedido,
          idUser: Date.now(), 
          nomeUser: nome,
          enderecoUser: endereco,
          complementoUser: complemento,
          bairroUser: bairro,
          numeroUser: numero,
          precoTotal: 0,
          formaPagmento: "",
        }
        : pedido
    );
    

    return console.log(pedidos)
  }

}
