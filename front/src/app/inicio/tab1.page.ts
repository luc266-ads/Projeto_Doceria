import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  icone: string;
  adicionado?: boolean;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonButton, IonIcon,
    RouterLink, NgFor,
  ],
})
export class Tab1Page {
  menuAberto = false;

  categorias = [
    { nome: 'Combos', icone: '🎂' },
    { nome: 'Bolos', icone: '🍰' },
    { nome: 'Tortas', icone: '🥧' },
    { nome: 'Doces', icone: '🧁' }
  ];

  produtos: Produto[] = [
    {
      nome: 'Bolo Red Velvet',
      descricao: 'Bolo cremoso com cream cheese',
      preco: '89,90',
      icone: '🍰'
    },
    {
      nome: 'Brownie',
      descricao: 'Chocolate 70% cacau',
      preco: '12,90',
      icone: '🍫'
    },
    {
      nome: 'Torta de Limão',
      descricao: 'Cremosa e refrescante',
      preco: '45,00',
      icone: '🍋'
    },
    {
      nome: 'Cupcake',
      descricao: 'Diversos sabores',
      preco: '8,90',
      icone: '🧁'
    }
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu() {
    this.menuAberto = false;
  }

  adicionar(produto: Produto) {
    produto.adicionado = true;

    setTimeout(() => {
      produto.adicionado = false;
    }, 2000);
  }
}


