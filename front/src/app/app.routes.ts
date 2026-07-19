import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'combos-pacotes',
    loadComponent: () => import('./combosPacotes/combosPacotes.page').then((m) => m.CombosPacotesPage),
  },
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./carrinho/carrinho.page').then((m) => m.carrinhoPage),
  },
];
