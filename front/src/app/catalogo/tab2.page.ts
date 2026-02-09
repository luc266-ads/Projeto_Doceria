import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonChip } from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButtons, IonButton, IonIcon, IonCard, IonChip,
    NgFor,
  ],
})
export class Tab2Page {
  filtroAtivo = 'todos';
  produtos = [
    { nome: 'Bolo Red Velvet', descricao: 'Cream cheese', preco: '89,90', icon: 'nutrition', bg: 'linear-gradient(135deg, #c17f3a 0%, #6b4423 100%)', categoria: 'bolos' },
    { nome: 'Bolo de Chocolate', descricao: 'Chocolate belga', preco: '79,90', icon: 'nutrition', bg: 'linear-gradient(135deg, #4a2f18 0%, #8b5a2b 100%)', categoria: 'bolos' },
    { nome: 'Brownie', descricao: '70% cacau', preco: '12,90', icon: 'square', bg: 'linear-gradient(135deg, #4a2f18 0%, #6b4423 100%)', categoria: 'doces' },
    { nome: 'Torta de Limão', descricao: 'Cremosa', preco: '45,00', icon: 'pie-chart', bg: 'linear-gradient(135deg, #d4a84b 0%, #c17f3a 100%)', categoria: 'tortas' },
    { nome: 'Torta de Morango', descricao: 'Com chantilly', preco: '48,00', icon: 'pie-chart', bg: 'linear-gradient(135deg, #e8b4b8 0%, #c17f3a 100%)', categoria: 'tortas' },
    { nome: 'Cupcake', descricao: 'Sabores variados', preco: '8,90', icon: 'sparkles', bg: 'linear-gradient(135deg, #e8b4b8 0%, #d4a84b 100%)', categoria: 'doces' },
    { nome: 'Brigadeiro Gourmet', descricao: 'Unidade', preco: '4,50', icon: 'ellipse', bg: 'linear-gradient(135deg, #6b4423 0%, #4a2f18 100%)', categoria: 'doces' },
    { nome: 'Cheesecake', descricao: 'Frutas vermelhas', preco: '52,00', icon: 'pie-chart', bg: 'linear-gradient(135deg, #e8b4b8 0%, #d4a84b 100%)', categoria: 'tortas' },
  ];
}
