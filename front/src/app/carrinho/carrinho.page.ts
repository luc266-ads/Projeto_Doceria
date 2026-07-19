import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

interface ItemCarrinho {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  quantidade: number;
  selecionado: boolean;
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

interface FormEndereco {
  nome: string;
  endereco: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  cep: string;
}

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss'],
  imports: [IonContent, NgFor, NgIf, FormsModule],
})
export class carrinhoPage {
  paginaAtiva: 'carrinho' | 'checkout' = 'carrinho';
  formAberto = false;
  itemRemovendoId: number | null = null;
  toastVisible = false;
  toastMessage = '';
  readonly taxaEntrega = 8;

  formEndereco: FormEndereco = {
    nome: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
  };

  itens: ItemCarrinho[] = [
    { id: 1, nome: 'Bolo Red Velvet', descricao: 'Bolo cremoso com cream cheese', preco: 89.9, imagem: '🍰', quantidade: 1, selecionado: true },
    { id: 4, nome: 'Brownie', descricao: 'Chocolate 70% cacau', preco: 12.9, imagem: '🍫', quantidade: 2, selecionado: true },
    { id: 8, nome: 'Torta de Limão', descricao: 'Cremosa e refrescante', preco: 45, imagem: '🍋', quantidade: 1, selecionado: false },
    { id: 11, nome: 'Combo Festa', descricao: 'Bolo + 12 docinhos + 6 salgados', preco: 135, imagem: '🎁', quantidade: 1, selecionado: true },
  ];

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

  enderecoSelecionadoId: number | null = 1;

  constructor(private router: Router) {}

  get itensSelecionados(): ItemCarrinho[] {
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

  formatarPreco(valor: number): string {
    return valor.toFixed(2).replace('.', ',');
  }

  showToast(mensagem: string): void {
    this.toastMessage = mensagem;
    this.toastVisible = true;
    setTimeout(() => {
      this.toastVisible = false;
    }, 2200);
  }

  toggleItem(id: number): void {
    const item = this.itens.find((produto) => produto.id === id);
    if (item) {
      item.selecionado = !item.selecionado;
    }
  }

  toggleTodos(): void {
    const marcarTodos = !this.todosMarcados;
    this.itens.forEach((item) => {
      item.selecionado = marcarTodos;
    });
  }

  alterarQtd(id: number, delta: number): void {
    const item = this.itens.find((produto) => produto.id === id);
    if (item) {
      item.quantidade = Math.max(1, item.quantidade + delta);
    }
  }

  removerItem(id: number): void {
    this.itemRemovendoId = id;
    setTimeout(() => {
      this.itens = this.itens.filter((item) => item.id !== id);
      this.itemRemovendoId = null;
      this.showToast('Produto removido do carrinho');
    }, 250);
  }

  excluirTodos(): void {
    if (this.itens.length === 0) {
      return;
    }

    if (confirm('Deseja realmente excluir todos os produtos do carrinho?')) {
      this.itens = [];
      this.showToast('Carrinho esvaziado');
    }
  }

  avancarParaCheckout(): void {
    if (this.itensSelecionados.length === 0) {
      return;
    }

    this.paginaAtiva = 'checkout';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  voltarParaCarrinho(): void {
    this.paginaAtiva = 'carrinho';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  irParaLoja(): void {
    this.router.navigate(['/tabs/inicio']);
  }

  selecionarEndereco(id: number): void {
    this.enderecoSelecionadoId = id;
  }

  toggleFormEndereco(): void {
    this.formAberto = !this.formAberto;
  }

  salvarEndereco(): void {
    const { nome, endereco, numero, complemento, bairro, cidade, cep } = this.formEndereco;

    if (!nome.trim() || !endereco.trim() || !numero.trim() || !bairro.trim() || !cidade.trim() || !cep.trim()) {
      this.showToast('Preencha todos os campos obrigatórios');
      return;
    }

    const novoEndereco: Endereco = {
      id: Date.now(),
      nomeDestinatario: nome.trim(),
      endereco: endereco.trim(),
      numero: numero.trim(),
      complemento: complemento.trim(),
      bairro: bairro.trim(),
      cidade: cidade.trim(),
      cep: cep.trim(),
      principal: this.enderecos.length === 0,
    };

    this.enderecos = [...this.enderecos, novoEndereco];
    this.enderecoSelecionadoId = novoEndereco.id;
    this.formEndereco = { nome: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', cep: '' };
    this.formAberto = false;
    this.showToast('Endereço adicionado com sucesso!');
  }

  finalizarPedido(): void {
    if (!this.temEndereco) {
      return;
    }

    this.showToast('Pedido confirmado com sucesso! 🎉');
  }
}
