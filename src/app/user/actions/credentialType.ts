import { Action } from '@ngrx/store';

import { CreateCredentialType } from '../models/requests/createCredentialType.model';
import { CredentialType } from '../models/credentialType.model';
import { ModifyCredentialType } from '../models/requests/modifyCredentialType.model';

export enum CredentialTypeActionTypes {
    AddCredentialType = '[CredentialType] Add Credential Type',
    AddCredentialTypeSuccess = '[CredentialType] Add Credential Type Success',
    AddCredentialTypeFail = '[CredentialType] Add Credential Type Fail',
    UpdateCredentialType = '[CredentialType] Update Credential Type',
    UpdateCredentialTypeSuccess = '[CredentialType] Update Credential Type Success',
    UpdateCredentialTypeFail = '[CredentialType] Update Credential Type Fail',
    RemoveCredentialType = '[CredentialType] Remove Credential Type',
    RemoveCredentialTypeSuccess = '[CredentialType] Remove Credential Type Success',
    RemoveCredentialTypeFail = '[CredentialType] Remove Credential Type Fail',
    SelectCredentialType = '[CredentialType] Select Credential Type',
    LoadCredentialTypes = '[CredentialType] Load Credential Type',
    LoadCredentialTypesSuccess = '[CredentialType] Load Credential Type Success',
    LoadCredentialTypesFail = '[CredentialType] Load Credential Type Fail'
}

export class AddCredentialType implements Action {
    readonly type = CredentialTypeActionTypes.AddCredentialType;

    constructor(public payload: CreateCredentialType) {
    }
}

export class AddCredentialTypeSuccess implements Action {
    readonly type = CredentialTypeActionTypes.AddCredentialTypeSuccess;

    constructor(public payload: CredentialType) {
    }
}

export class AddCredentialTypeFail implements Action {
    readonly type = CredentialTypeActionTypes.AddCredentialTypeFail;

    constructor(public payload: string) {
    }
}

export class UpdateCredentialType implements Action {
    readonly type = CredentialTypeActionTypes.UpdateCredentialType;

    constructor(public payload: ModifyCredentialType) {
    }
}

export class UpdateCredentialTypeFail implements Action {
    readonly type = CredentialTypeActionTypes.UpdateCredentialTypeFail;

    constructor(public payload: string) {
    }
}

export class UpdateCredentialTypeSuccess implements Action {
    readonly type = CredentialTypeActionTypes.UpdateCredentialTypeSuccess;

    constructor(public payload: Partial<CredentialType>) {
    }
}

export class RemoveCredentialType implements Action {
    readonly type = CredentialTypeActionTypes.RemoveCredentialType;

    constructor(public payload: number) {
    }
}

export class RemoveCredentialTypeSuccess implements Action {
    readonly type = CredentialTypeActionTypes.RemoveCredentialTypeSuccess;

    constructor(public payload: number) {
    }
}

export class RemoveCredentialTypeFail implements Action {
    readonly type = CredentialTypeActionTypes.RemoveCredentialTypeFail;

    constructor(public payload: string) {
    }
}

export class SelectCredentialType implements Action {
    readonly type = CredentialTypeActionTypes.SelectCredentialType;

    constructor(public payload: number) {
    }
}

export class LoadCredentialTypes implements Action {
    readonly type = CredentialTypeActionTypes.LoadCredentialTypes;
}

export class LoadCredentialTypesSuccess implements Action {
    readonly type = CredentialTypeActionTypes.LoadCredentialTypesSuccess;

    constructor(public payload: CredentialType[]) {
    }
}

export class LoadCredentialTypesFail implements Action {
    readonly type = CredentialTypeActionTypes.LoadCredentialTypesFail;

    constructor(public payload: string) {
    }
}

export type CredentialTypeActions =
    AddCredentialType
    | AddCredentialTypeSuccess
    | AddCredentialTypeFail
    | UpdateCredentialType
    | UpdateCredentialTypeSuccess
    | UpdateCredentialTypeFail
    | RemoveCredentialType
    | RemoveCredentialTypeSuccess
    | RemoveCredentialTypeFail
    | SelectCredentialType
    | LoadCredentialTypes
    | LoadCredentialTypesSuccess
    | LoadCredentialTypesFail;
