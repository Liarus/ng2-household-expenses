import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routing } from './core.routing';
import { MenuService } from './services/menu.service';

import {
    MenuComponent,
    MenuItemComponent,
    SidebarComponent
} from './components';

import {
    PagesComponent,
    AppComponent
} from './containers';

const CORE_COMPONENTS = [
    MenuComponent,
    MenuItemComponent,
    SidebarComponent,
    PagesComponent,
    AppComponent
];

const CORE_PROVIDERS = [
    MenuService
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
    declarations: [
        CORE_COMPONENTS,
    ],
    exports: [
        CORE_COMPONENTS
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: CoreModule,
            providers: [CORE_PROVIDERS]
        };
    }
}
