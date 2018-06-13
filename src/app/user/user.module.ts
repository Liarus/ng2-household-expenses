import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { PrimeNgModule } from '../primeNg/primeNg.module';
import { routing } from './user.routing';
import { reducers } from './reducers';
import { CredentialTypeEffects } from './effects/credentialType';
import { CredentialTypeService } from './services/credentialType.service';
import { PermissionEffects } from './effects/permission';
import { PermissionService } from './services/permission.service';
import { RoleEffects } from './effects/role';
import { RoleService } from './services/role.service';

import {
    UserPageComponent,
    CredentialTypePageComponent,
    PermissionPageComponent,
    RolePageComponent
} from './containers';
import {
    CredentialTypeListComponent,
    PermissionListComponent,
    RoleListComponent,
    RoleCreateModalComponent,
    RoleUpdateModalComponent
} from './components';

const USER_COMPONENTS = [
    UserPageComponent,
    CredentialTypePageComponent,
    PermissionPageComponent,
    CredentialTypeListComponent,
    PermissionListComponent,
    RolePageComponent,
    RoleListComponent,
    RoleCreateModalComponent,
    RoleUpdateModalComponent
];

const USER_PROVIDERS = [
    CredentialTypeService,
    PermissionService,
    RoleService
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        PrimeNgModule,
        StoreModule.forFeature('users', reducers),
        EffectsModule.forFeature([CredentialTypeEffects, PermissionEffects, RoleEffects])
    ],
    providers: [
        USER_PROVIDERS
    ],
    declarations: [
        USER_COMPONENTS
    ]
})
export class UserModule {
}
