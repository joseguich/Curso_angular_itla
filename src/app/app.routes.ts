import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'interplacion',
    loadComponent: () =>
      import('./components/interpolation/interpolation.component').then(
        (c) => c.InterpolationComponent
      ),
  },
  {
    path: 'interplacion',
    loadComponent: () =>
      import('./components/interpolation/interpolation.component').then(
        (c) => c.InterpolationComponent
      ),
  },
  {
    path: 'interplacion',
    loadComponent: () =>
      import('./components/interpolation/interpolation.component').then(
        (c) => c.InterpolationComponent
      ),
  },
  {
    path: 'directivas',
    loadComponent: () =>
      import('./components/directivas/directivas.component').then(
        (c) => c.DirectivasComponent
      ),
  },
  {
    path: 'list_user',
    loadComponent: () =>
      import('./components/list-user/list-user.component').then(
        (c) => c.ListUserComponent
      ),
  },
  {
    path: 'score',
    loadComponent: () =>
      import('./components/score/score.component').then(
        (c) => c.ScoreComponent
      ),
  },
];
