
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './containers';

export const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: 'app-households', loadChildren: '../household/household.module#HouseholdModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
