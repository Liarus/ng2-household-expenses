import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './containers';

export const routes: Routes = [
    {
        path: 'core',
        component: PagesComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
