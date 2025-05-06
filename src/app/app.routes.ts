import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('@projects/hys-layouts').then(c => c.HysSidebarComponent),
    children: [],
  }
];
