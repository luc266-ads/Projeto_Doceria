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
  {
    path: 'inicio',
    loadComponent: () =>
      import('./inicio/inicio.page').then((m) => m.inicioPage),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./contato/contato.page').then((m) => m.contatoPage),
  },
  {
    path: 'quemSomos',
    loadComponent: () =>
      import('./quemSomos/quemSomos.page').then((m) => m.quemSomosPage),
  },
  {
    path: 'endereco',
    loadComponent: () =>
      import('./endereco/endereco.page').then((m) => m.enderecoPage),
  },
];
