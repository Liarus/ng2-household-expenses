import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { HouseholdEffects } from './effects/household';
import { HouseholdService } from './services/household.service';
import { routing } from './households.routing';
import { PrimeNgModule } from '../primeNg/primeNg.module';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
    HouseholdPageComponent
} from './containers';
import {
    HouseholdListComponent
} from './components';

const HOUSEHOLD_COMPONENTS = [
    HouseholdPageComponent,
    HouseholdListComponent
];

const HOUSEHOLD_PROVIDERS = [
    HouseholdService
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        PrimeNgModule,
        StoreModule.forFeature('households', reducers),
        EffectsModule.forFeature([HouseholdEffects])
    ],
    providers: [
        HOUSEHOLD_PROVIDERS
    ],
    declarations: [
        HOUSEHOLD_COMPONENTS,
    ]
})
export class HouseholdModule {
}