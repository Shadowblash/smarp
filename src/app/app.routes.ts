import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-anesthesia/about-anesthesia').then(m => m.AboutAnesthesia),
      },
      {
        path: 'intensive-care',
        loadComponent: () => import('./pages/intensive-care/intensive-care').then(m => m.IntensiveCare),
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
      },
      {
        path: 'faq',
        loadComponent: () => import('./pages/faq/faq').then(m => m.Faq),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
