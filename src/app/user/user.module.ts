import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PrimeNgModule } from '../primeNg/primeNg.module';
import { routing } from './user.routing';
import { reducers } from '../reducers';
import { CredentialTypeEffects } from './effects/credentialType';
import { CredentialTypeService } from './services/credentialType.service';

import {
    UserPageComponent,
    CredentialTypePageComponent
} from './containers';
import {
    CredentialTypeListComponent
} from './components';

const USER_COMPONENTS = [
    UserPageComponent,
    CredentialTypeListComponent
];

const USER_PROVIDERS = [
    CredentialTypeService
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        PrimeNgModule,
        StoreModule.forFeature('users', reducers),
        EffectsModule.forFeature([CredentialTypeEffects])
    ],
    providers: [
        USER_PROVIDERS
    ],
    declarations: [
        USER_COMPONENTS,
        CredentialTypePageComponent
    ]
})
export class UserModule {
}