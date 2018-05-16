import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HouseholdPageComponent } from './containers/household-page/household-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HouseholdPageComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
