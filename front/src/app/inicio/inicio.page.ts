import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  icone: string;
  categoria: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [
    IonContent,
    NgFor,
  ],
})
export class inicioPage {
  constructor() { }
  menuAberto = false;
  categoriaSelecionada = 'todos';


  categorias = [
    { nome: 'Todos', valor: 'todos', icone: '🍽️' },
    { nome: 'Combos', valor: 'combos', icone: '🎂' },
    { nome: 'Bolos', valor: 'bolos', icone: '🍰' },
    { nome: 'Tortas', valor: 'tortas', icone: '🥧' },
    { nome: 'Doces', valor: 'doces', icone: '🧁' }
  ];

  produtos: Produto[] = [
    { nome: 'Bolo Red Velvet', descricao: 'Bolo cremoso com cream cheese', preco: '89,90', icone: '🍰', categoria: 'bolos' },
    { nome: 'Bolo de Cenoura', descricao: 'Com cobertura de chocolate', preco: '65,00', icone: '🎂', categoria: 'bolos' },
    { nome: 'Bolo de Chocolate', descricao: 'Massa úmida e recheio cremoso', preco: '75,00', icone: '🍫', categoria: 'bolos' },

    { nome: 'Brownie', descricao: 'Chocolate 70% cacau', preco: '12,90', icone: '🍫', categoria: 'doces' },
    { nome: 'Cupcake', descricao: 'Diversos sabores', preco: '8,90', icone: '🧁', categoria: 'doces' },
    { nome: 'Pudim', descricao: 'Tradicional e cremoso', preco: '15,00', icone: '🍮', categoria: 'doces' },
    { nome: 'Cookies', descricao: 'Gotas de chocolate (6 unidades)', preco: '18,00', icone: '🍪', categoria: 'doces' },

    { nome: 'Torta de Limão', descricao: 'Cremosa e refrescante', preco: '45,00', icone: '🍋', categoria: 'tortas' },
    { nome: 'Torta de Morango', descricao: 'Morangos frescos e chantilly', preco: '52,00', icone: '🍓', categoria: 'tortas' },
    { nome: 'Torta de Maçã', descricao: 'Receita tradicional americana', preco: '48,00', icone: '🍏', categoria: 'tortas' },

    { nome: 'Combo Festa', descricao: 'Bolo + 12 docinhos + 6 salgados', preco: '135,00', icone: '🎁', categoria: 'combos' },
    { nome: 'Combo Aniversário', descricao: 'Bolo personalizado + 20 brigadeiros', preco: '159,90', icone: '🎉', categoria: 'combos' },
    { nome: 'Combo Café', descricao: 'Bolo fatia + brownie + cookies', preco: '35,00', icone: '☕', categoria: 'combos' }
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
  }

  produtoVisivel(produto: Produto) {
    return this.categoriaSelecionada === 'todos' ||
      produto.categoria === this.categoriaSelecionada;
  }

  adicionar(btn: HTMLButtonElement) {
    btn.textContent = '✓ Adicionado';
    btn.style.background = 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)';

    setTimeout(() => {
      btn.textContent = 'Adicionar';
      btn.style.background = '';
    }, 2000);
  }


}


