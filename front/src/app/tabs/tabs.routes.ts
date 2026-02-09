import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../inicio/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../catalogo/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../contato/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'quem-somos',
        loadComponent: () =>
          import('../quem-somos/quem-somos.page').then((m) => m.QuemSomosPage),
      },
      {
        path: 'endereco',
        loadComponent: () =>
          import('../endereco/endereco.page').then((m) => m.EnderecoPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
