import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PrimeNgModule } from '../primeNg/primeNg.module';
import { routing } from './settings.routing';
import { ExpenseTypeEffects } from './effects/expenseType';
import { SavingTypeEffects } from './effects/savingType';
import { ExpenseTypeService } from './services/expenseType.service';
import { SavingTypeService } from './services/savingType.service';
import { reducers } from './reducers';

import {
    SettingsPageComponent,
    ExpenseTypePageComponent,
    SavingTypePageComponent
} from './containers';
import {
    SavingTypeListComponent,
    ExpenseTypeListComponent,
    SavingTypeCreateModalComponent,
    SavingTypeUpdateModalComponent,
    ExpenseTypeUpdateModalComponent,
    ExpenseTypeCreateModalComponent
} from './components';

const SETTINGS_COMPONENTS = [
    SettingsPageComponent,
    ExpenseTypePageComponent,
    SavingTypePageComponent,
    SavingTypeListComponent,
    ExpenseTypeListComponent,
    SavingTypeCreateModalComponent,
    SavingTypeUpdateModalComponent,
    ExpenseTypeUpdateModalComponent,
    ExpenseTypeCreateModalComponent
];

const SETTINGS_PROVIDERS = [
    SavingTypeService,
    ExpenseTypeService
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        PrimeNgModule,
        StoreModule.forFeature('settings', reducers),
        EffectsModule.forFeature([ExpenseTypeEffects, SavingTypeEffects])
    ],
    providers: [
        SETTINGS_PROVIDERS
    ],
    declarations: [
        SETTINGS_COMPONENTS
    ]
})
export class SettingsModule {
}
