
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './containers';

export const routes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: 'app-households', loadChildren: '../household/household.module#HouseholdModule' },
            { path: 'app-settings', loadChildren: '../settings/settings.module#SettingsModule' },
            { path: 'app-users', loadChildren: '../user/user.module#UserModule' }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
