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
  id: number;
  nomeUser: string;
  enderecoUser: string;
  complementoUser: string;
  bairroUser: string;
  numeroUser: string;
  precoTotal: number;
  formaPagmento: string;
}
interface Endereco {
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
  dadosPedidos: PedidoEntrega[]= [];


  enderecos: Endereco[] = [
    {
      id: 1,
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
  salvarPedido(endereco: Endereco, pagamento: FormPagamento){

    this.nomeUser = endereco.nomeDestinatario;
    this.enderecoUser = endereco.endereco;
    this.complementoUser = endereco.complemento;
    this.bairroUser = endereco.bairro;
    this.numeroUser = endereco.numero;
    this.cidadeUser = endereco.cidade;
    this.cepUser = endereco.cep;

    this.formaPagmento = pagamento.pagamento;


    this.dadosPedidos.push(
      {
        id: endereco.id,
        nomeUser : this.nomeUser,
        enderecoUser : this.enderecoUser,
        complementoUser : this.complementoUser,
        bairroUser : this.bairroUser,
        numeroUser : this.numeroUser,
        precoTotal : 0,
        formaPagmento : this.formaPagmento,
      }
    )

    return console.log(this.dadosPedidos)
  }

  enviarPedido(){

   
  }

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

  get enderecoSelecionado(): Endereco | undefined {
    return this.enderecos.find((endereco) => endereco.id === this.enderecoSelecionadoId);
  }

  get temEndereco(): boolean {
    return !!this.enderecoSelecionado;
  }


}
