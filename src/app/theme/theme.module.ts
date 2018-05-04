import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
    MenuItemComponent,
    MenuComponent,
    SidebarComponent
} from './components';

const THEME_COMPONENTS = [
    MenuItemComponent,
    MenuComponent,
    SidebarComponent
];

@NgModule({
    declarations : [
        THEME_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        THEME_COMPONENTS
    ]
})

export class ThemeModule {

}
