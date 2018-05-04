import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/core', pathMatch: 'full' },
  {
    path: 'core',
    loadChildren: './core/core.module#CoreModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
