import { Action } from '@ngrx/store';

import { Household } from './../../models/household.model';
import { CreateHousehold } from './../../models/requests/createHousehold.model';
import { ModifyHousehold } from './../../models/requests/modifyHousehold.model';

export enum HouseholdActionTypes {
    AddHousehold = '[Household] Add Household',
    AddHouseholdSuccess = '[Household API] Add Household Success',
    AddHouseholdFail = '[Household API] Add Household Fail',
    UpdateHousehold = '[Household] Update Household',
    UpdateHouseholdSuccess = '[Household API] Update Household Success',
    UpdateHouseholdFail = '[Household API] Update Household Fail',
    RemoveHousehold = '[Household] Remove Household',
    RemoveHouseholdSuccess = '[Household API] Remove Household Success',
    RemoveHouseholdFail = '[Household API] Remove Household Fail',
    SelectHousehold = '[Household] Select Household',
    LoadHouseholds = '[Household] Load Households',
    LoadHouseholdsSuccess = '[Household API] Load Households Success',
    LoadHouseholdsFail = '[Household API] Load Households Fail'
}

export class AddHousehold implements Action {
    readonly type = HouseholdActionTypes.AddHousehold;

    constructor(public payload: CreateHousehold) {
    }
}

export class AddHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.AddHouseholdSuccess;

    constructor(public payload: Household) {
    }
}

export class AddHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.AddHouseholdFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateHousehold implements Action {
    readonly type = HouseholdActionTypes.UpdateHousehold;

    constructor(public payload: ModifyHousehold) {
    }
}

export class UpdateHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.UpdateHouseholdFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.UpdateHouseholdSuccess;

    constructor(public payload: Partial<Household>) {
    }
}

export class RemoveHousehold implements Action {
    readonly type = HouseholdActionTypes.RemoveHousehold;

    constructor(public payload: {householdId: number}) {
    }
}

export class RemoveHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.RemoveHouseholdSuccess;

    constructor(public payload: {householdId: number}) {
    }
}

export class RemoveHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.RemoveHouseholdFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class SelectHousehold implements Action {
    readonly type = HouseholdActionTypes.SelectHousehold;

    constructor(public payload: {householdId: number}) {
    }
}

export class LoadHouseholds implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholds;

    constructor(public payload: {userId: number}) {
    }
}

export class LoadHouseholdsSuccess implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholdsSuccess;

    constructor(public payload: Household[]) {
    }
}

export class LoadHouseholdsFail implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholdsFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export type HouseholdActions =
    AddHousehold
    | AddHouseholdSuccess
    | AddHouseholdFail
    | UpdateHousehold
    | UpdateHouseholdSuccess
    | UpdateHouseholdFail
    | RemoveHousehold
    | RemoveHouseholdSuccess
    | RemoveHouseholdFail
    | SelectHousehold
    | LoadHouseholds
    | LoadHouseholdsSuccess
    | LoadHouseholdsFail;
