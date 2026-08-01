import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { carrinhoService } from '../servicesCarrinho/carrinhoService';




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
  constructor(private router: Router, public carroService: carrinhoService) { }
  paginaAtiva: 'carrinho' | 'checkout' = 'carrinho';
  formAberto = false;
  itemRemovendoId: number | null = null;
  toastVisible = false;
  toastMessage = '';


  formEndereco: FormEndereco = {
    nome: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
  };


  adicionarItem() {
    this.carroService.itens


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
    const item = this.carroService.itens.find((produto) => produto.id === id);
    if (item) {
      item.selecionado = !item.selecionado;
    }
  }

  toggleTodos(): void {
    const marcarTodos = !this.carroService.todosMarcados;
    this.carroService.itens.forEach((item) => {
      item.selecionado = marcarTodos;
    });
  }

  alterarQtd(id: number, delta: number): void {
    const item = this.carroService.itens.find((produto) => produto.id === id);
    if (item) {
      item.quantidade = Math.max(1, item.quantidade + delta);
    }
  }

  removerItem(id: number): void {
    this.itemRemovendoId = id;
    setTimeout(() => {
      this.carroService.itens = this.carroService.itens.filter((item) => item.id !== id);
      this.itemRemovendoId = null;
      this.showToast('Produto removido do carrinho');
    }, 250);
  }

  excluirTodos(): void {
    if (this.carroService.itens.length === 0) {
      return;
    }

    if (confirm('Deseja realmente excluir todos os produtos do carrinho?')) {
      this.carroService.itens = [];
      this.showToast('Carrinho esvaziado');
    }
  }

  avancarParaCheckout(): void {
    if (this.carroService.itensSelecionados.length === 0) {
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
    this.carroService.enderecoSelecionadoId = id;
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
      principal: this.carroService.enderecos.length === 0,
    };

    this.carroService.enderecos = [...this.carroService.enderecos, novoEndereco];
    this.carroService.enderecoSelecionadoId = novoEndereco.id;
    this.formEndereco = { nome: '', endereco: '', numero: '', complemento: '', bairro: '', cidade: '', cep: '' };
    this.formAberto = false;
    this.showToast('Endereço adicionado com sucesso!');
  }

  finalizarPedido(): void {
    if (!this.carroService.temEndereco) {
      return;
    }

    this.showToast('Pedido confirmado com sucesso! 🎉');
  }
}
