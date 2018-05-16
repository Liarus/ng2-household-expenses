import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PrimeNgModule } from '../primeNg/primeNg.module';
import { routing } from './settings.routing';

import {
    SettingsPageComponent,
    ExpenseTypePageComponent,
    SavingTypePageComponent
} from './containers';
import {
} from './components';

const SETTINGS_COMPONENTS = [
    SettingsPageComponent,
    ExpenseTypePageComponent,
    SavingTypePageComponent
];

const SETTINGS_PROVIDERS = [
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        PrimeNgModule,
    ],
    providers: [
        SETTINGS_PROVIDERS
    ],
    declarations: [
        SETTINGS_COMPONENTS,
    ]
})
export class SettingsModule {
}
