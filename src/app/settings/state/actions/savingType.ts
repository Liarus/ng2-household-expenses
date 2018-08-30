import { Action } from '@ngrx/store';

import { CreateSavingType } from '../../models/requests/createSavingType.model';
import { SavingType } from '../../models/savingType.model';
import { ModifySavingType } from '../../models/requests/modifySavingType.model';

export enum SavingTypeActionTypes {
    AddSavingType = '[SavingType] Add Saving Type',
    AddSavingTypeSuccess = '[SavingType API] Add Saving Type Success',
    AddSavingTypeFail = '[SavingType API] Add Saving Type Fail',
    UpdateSavingType = '[SavingType] Update Saving Type',
    UpdateSavingTypeSuccess = '[SavingType API] Update Saving Type Success',
    UpdateSavingTypeFail = '[SavingType API] Update Saving Type Fail',
    RemoveSavingType = '[SavingType] Remove Saving Type',
    RemoveSavingTypeSuccess = '[SavingType API] Remove Saving Type Success',
    RemoveSavingTypeFail = '[SavingType API] Remove Saving Type Fail',
    SelectSavingType = '[SavingType] Select Saving Type',
    LoadSavingTypes = '[SavingType] Load Saving Types',
    LoadSavingTypesSuccess = '[SavingType API] Load Saving Types Success',
    LoadSavingTypesFail = '[SavingType API] Load Saving Types Fail'
}

export class AddSavingType implements Action {
    readonly type = SavingTypeActionTypes.AddSavingType;

    constructor(public payload: CreateSavingType) {
    }
}

export class AddSavingTypeSuccess implements Action {
    readonly type = SavingTypeActionTypes.AddSavingTypeSuccess;

    constructor(public payload: SavingType) {
    }
}

export class AddSavingTypeFail implements Action {
    readonly type = SavingTypeActionTypes.AddSavingTypeFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateSavingType implements Action {
    readonly type = SavingTypeActionTypes.UpdateSavingType;

    constructor(public payload: ModifySavingType) {
    }
}

export class UpdateSavingTypeFail implements Action {
    readonly type = SavingTypeActionTypes.UpdateSavingTypeFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateSavingTypeSuccess implements Action {
    readonly type = SavingTypeActionTypes.UpdateSavingTypeSuccess;

    constructor(public payload: Partial<SavingType>) {
    }
}

export class RemoveSavingType implements Action {
    readonly type = SavingTypeActionTypes.RemoveSavingType;

    constructor(public payload: {savingTypeId: number}) {
    }
}

export class RemoveSavingTypeSuccess implements Action {
    readonly type = SavingTypeActionTypes.RemoveSavingTypeSuccess;

    constructor(public payload: {savingTypeId: number}) {
    }
}

export class RemoveSavingTypeFail implements Action {
    readonly type = SavingTypeActionTypes.RemoveSavingTypeFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class SelectSavingType implements Action {
    readonly type = SavingTypeActionTypes.SelectSavingType;

    constructor(public payload: {savingTypeId: number}) {
    }
}

export class LoadSavingTypes implements Action {
    readonly type = SavingTypeActionTypes.LoadSavingTypes;

    constructor(public payload: {userId: number}) {
    }
}

export class LoadSavingTypesSuccess implements Action {
    readonly type = SavingTypeActionTypes.LoadSavingTypesSuccess;

    constructor(public payload: SavingType[]) {
    }
}

export class LoadSavingTypesFail implements Action {
    readonly type = SavingTypeActionTypes.LoadSavingTypesFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export type SavingTypeActions =
    AddSavingType
    | AddSavingTypeSuccess
    | AddSavingTypeFail
    | UpdateSavingType
    | UpdateSavingTypeSuccess
    | UpdateSavingTypeFail
    | RemoveSavingType
    | RemoveSavingTypeSuccess
    | RemoveSavingTypeFail
    | SelectSavingType
    | LoadSavingTypes
    | LoadSavingTypesSuccess
    | LoadSavingTypesFail;
