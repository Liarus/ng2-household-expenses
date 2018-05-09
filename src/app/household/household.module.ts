import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers';
import { HouseholdEffects } from './effects/household';
import { HouseholdService } from './services/household.service';

const HOUSEHOLD_COMPONENTS = [
];

const HOUSEHOLD_PROVIDERS = [
    HouseholdService
];

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('households', reducers),
        EffectsModule.forFeature([HouseholdEffects])
    ],
    providers: [
        HOUSEHOLD_PROVIDERS
    ]
})
export class HouseholdModule {
}
