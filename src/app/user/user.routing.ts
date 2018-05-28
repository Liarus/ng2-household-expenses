import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserPageComponent } from './containers/user-page/user-page.component';

export const routes: Routes = [
    {
        path: '',
        component: UserPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
