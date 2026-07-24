import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  categoria: string;
  ativo: boolean;
}


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [
    IonContent,
    CommonModule,
  ],
})
export class inicioPage {
  constructor(private router: Router) { }
  menuAberto = false;
  categoriaSelecionada = 'todos';
  nomeSelecionada = '';
  descricaoSelecionada = '';
  precoSelecionada = '';
  imagemSelecionada = '';
  animarClick = false;
  animarCarrinho = false;
  animarContagemItem = false;
  mostrarContagem = false;
  contador = 0;


  categorias = [
    { nome: 'Todos', valor: 'todos', imagem: '🍽️' },
    { nome: 'Combos', valor: 'combos', imagem: '🎂' },
    { nome: 'Bolos', valor: 'bolos', imagem: '🍰' },
    { nome: 'Tortas', valor: 'tortas', imagem: '🥧' },
    { nome: 'Doces', valor: 'doces', imagem: '🧁' }
  ];

  produtos: Produto[] = [
    { nome: 'Bolo Red Velvet', descricao: 'Bolo cremoso com cream cheese', preco: '89,90', imagem: '🍰', categoria: 'bolos', ativo: true },
    { nome: 'Bolo de Cenoura', descricao: 'Com cobertura de chocolate', preco: '65,00', imagem: '🎂', categoria: 'bolos', ativo: true },
    { nome: 'Bolo de Chocolate', descricao: 'Massa úmida e recheio cremoso', preco: '75,00', imagem: '🍫', categoria: 'bolos', ativo: true },

    { nome: 'Brownie', descricao: 'Chocolate 70% cacau', preco: '12,90', imagem: '🍫', categoria: 'doces', ativo: true },
    { nome: 'Cupcake', descricao: 'Diversos sabores', preco: '8,90', imagem: '🧁', categoria: 'doces', ativo: true },
    { nome: 'Pudim', descricao: 'Tradicional e cremoso', preco: '15,00', imagem: '🍮', categoria: 'doces', ativo: true },
    { nome: 'Cookies', descricao: 'Gotas de chocolate (6 unidades)', preco: '18,00', imagem: '🍪', categoria: 'doces', ativo: true },

    { nome: 'Torta de Limão', descricao: 'Cremosa e refrescante', preco: '45,00', imagem: '🍋', categoria: 'tortas', ativo: true },
    { nome: 'Torta de Morango', descricao: 'Morangos frescos e chantilly', preco: '52,00', imagem: '🍓', categoria: 'tortas', ativo: true },
    { nome: 'Torta de Maçã', descricao: 'Receita tradicional americana', preco: '48,00', imagem: '🍏', categoria: 'tortas', ativo: true },

    { nome: 'Combo Festa', descricao: 'Bolo + 12 docinhos + 6 salgados', preco: '135,00', imagem: '🎁', categoria: 'combos', ativo: true },
    { nome: 'Combo Aniversário', descricao: 'Bolo personalizado + 20 brigadeiros', preco: '159,90', imagem: '🎉', categoria: 'combos', ativo: true },
    { nome: 'Combo Café', descricao: 'Bolo fatia + brownie + cookies', preco: '35,00', imagem: '☕', categoria: 'combos', ativo: true }
  ];

  produtosAtivos = this.produtos.filter(u => u.ativo);

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.filterProdutos();
  }

  filterProdutos() {
    console.log(this.categoriaSelecionada)
    if (this.categoriaSelecionada === 'todos') {

      this.produtos.forEach(produto => {
        produto.ativo = true;
      });

    } else {

      this.produtos.forEach(produto => {
        produto.ativo = produto.categoria === this.categoriaSelecionada;
      });

    }

    this.produtosAtivos = this.produtos.filter(produto => produto.ativo);
  }

  adicionar(btn: HTMLButtonElement,
    nome: string,
    descricao: string,
    preco: string,
    imagem: string,
  ) {

    btn.textContent = '✓ Adicionado';
    btn.style.background = 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)';

    setTimeout(() => {
      btn.textContent = 'Adicionar';
      btn.style.background = '';
    }, 500);

    this.nomeSelecionada = nome;
    this.descricaoSelecionada = descricao;
    this.precoSelecionada = preco;
    this.imagemSelecionada = imagem;

    this.contador++

    this.mostrarContagem = true
    this.animarClick = true
    this.animarCarrinho = true
    this.animarContagemItem = true

    setTimeout(() => {
      this.mostrarContagem = false;
    }, 200);

    setTimeout(() => {
      this.animarClick = false;
    }, 200);

    setTimeout(() => {
      this.animarCarrinho = false;
    }, 500);
    setTimeout(() => {
      this.animarContagemItem = false;
    }, 500);

    console.log(
      `
  Nome: ${this.nomeSelecionada}
  Descricao: ${this.descricaoSelecionada}
  Preco: ${this.precoSelecionada}
  Imagem: ${this.imagemSelecionada}`)



  }



  inicio() {
    this.router.navigate(['/inicio']);

  }
  contato() {
    this.router.navigate(['/contato']);

  }
  quemSomos() {
    this.router.navigate(['/quemSomos']);

  }
  endereco() {
    this.router.navigate(['/endereco']);

  }
  paginaCarrinho() {
    this.router.navigate(['/carrinho']);

  }
}


