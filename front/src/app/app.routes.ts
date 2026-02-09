import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'combos-pacotes',
    loadComponent: () => import('./combos-pacotes/combos-pacotes.page').then((m) => m.CombosPacotesPage),
  },
];
