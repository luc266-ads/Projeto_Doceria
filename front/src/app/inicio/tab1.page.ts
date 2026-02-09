import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

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
  destaques = [
    { nome: 'Bolo Red Velvet', descricao: 'Bolo cremoso com cream cheese', preco: '89,90', icon: 'nutrition' },
    { nome: 'Brownie', descricao: 'Chocolate 70% cacau', preco: '12,90', icon: 'square' },
    { nome: 'Torta de Limão', descricao: 'Cremosa e refrescante', preco: '45,00', icon: 'pie-chart' },
    { nome: 'Cupcake', descricao: 'Diversos sabores', preco: '8,90', icon: 'sparkles' },
  ];
}
