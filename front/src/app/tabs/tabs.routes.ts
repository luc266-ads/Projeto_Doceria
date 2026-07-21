import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('../inicio/inicio.page').then((m) => m.inicioPage),
      },
      {
        path: 'contato',
        loadComponent: () =>
          import('../contato/contato.page').then((m) => m.contatoPage),
      },
      {
        path: 'quemSomos',
        loadComponent: () =>
          import('../quemSomos/quemSomos.page').then((m) => m.quemSomosPage),
      },
      {
        path: 'endereco',
        loadComponent: () =>
          import('../endereco/endereco.page').then((m) => m.enderecoPage),
      },
      {
        path: 'carrinho',
        loadComponent: () =>
          import('../carrinho/carrinho.page').then((m) => m.carrinhoPage),
      },
      {
        path: '',
        redirectTo: '/tabs/inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];
