import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SidebarComponent
} from './components';

const THEME_COMPONENTS = [
    SidebarComponent
];

@NgModule({
    declarations : [
        THEME_COMPONENTS
    ],
    imports: [
        CommonModule
    ],
    exports: [
        THEME_COMPONENTS
    ]
})

export class ThemeModule {

}
