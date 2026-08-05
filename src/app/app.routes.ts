import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./Components/hero/hero').then(m => m.Hero)
  },
  {
    path: 'about',
    loadComponent: () => import('./Components/about/about').then(m => m.About)
  },
  {
    path: 'education',
    loadComponent: () => import('./Components/formation/formation').then(m => m.Formation)
  },
  {
    path: 'experience',
    loadComponent: () => import('./Components/experience/experience').then(m => m.Experience)
  },
  {
    path: 'projects',
    loadComponent: () => import('./Components/projet/projet').then(m => m.Projet)
  },
  {
    path: 'skills',
    loadComponent: () => import('./Components/skills/skills').then(m => m.Skills)
  },
  {
    path: 'contact',
    loadComponent: () => import('./Components/contact/contact').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: 'home' }
];