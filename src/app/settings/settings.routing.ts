import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SettingsPageComponent } from './containers/settings-page/settings-page.component';

export const routes: Routes = [
    {
        path: '',
        component: SettingsPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
