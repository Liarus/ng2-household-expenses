import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { routing } from './core.routing';

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
];

const CORE_CONTAINERS = [
    PagesComponent,
    AppComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        routing
    ],
    declarations: [
        CORE_COMPONENTS,
        CORE_CONTAINERS
    ]
})
export class CoreModule {
}
