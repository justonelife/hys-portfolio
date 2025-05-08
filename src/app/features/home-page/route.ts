import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shell.component').then(c => c.ShellComponent),
    title: 'Home'
  }
];
