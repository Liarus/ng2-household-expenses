import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: undefined
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
