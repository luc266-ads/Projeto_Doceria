import { Injectable } from '@angular/core';

interface ItemCarrinho {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
  selecionado: boolean;
  // id: number;
  // nome: string;
  // descricao: string;
  // preco: number;
  // imagem: string;
  // quantidade: number;
  // selecionado: boolean;
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


@Injectable({
  providedIn: 'root',
})

export class carrinhoService {



  itens: ItemCarrinho[] = [];
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


}
