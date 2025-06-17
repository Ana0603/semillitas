import { Routes } from '@angular/router';
import { MiniJuego } from './mini-juego';

export const routes: Routes = [
  {
    path: '',
    component: MiniJuego,
    children: [
      {
        path: 'nivel1',
        loadComponent: () =>
          import('./nivel1/nivel1').then(m => m.Nivel1),
      },
      {
        path: 'nivel2',
        loadComponent: () =>
          import('./nivel2/nivel2').then(m => m.Nivel2),
      },
      {
        path: 'nivel3',
        loadComponent: () =>
          import('./nivel3/nivel3').then(m => m.Nivel3),
      },
      {
        path: 'nivel4',
        loadComponent: () =>
          import('./nivel4/nivel4').then(m => m.Nivel4),
      },
      {
        path: '',
        redirectTo: 'nivel1',
        pathMatch: 'full',
      },
    ],
  },
];