import { Action } from '@ngrx/store';

import { Household } from './../models/household.model';

export enum HouseholdActionTypes {
    AddHousehold = '[Household] Add Household',
    AddHouseholdSuccess = '[Household] Add Household Success',
    AddHouseholdFail = '[Household] Add Household Fail',
    UpdateHousehold = '[Household] Update Household',
    UpdateHouseholdSuccess = '[Household] Update Household Success',
    UpdateHouseholdFail = '[Household] Update Household Fail',
    RemoveHousehold = '[Household] Remove Household',
    RemoveHouseholdSuccess = '[Household] Remove Household Success',
    RemoveHouseholdFail = '[Household] Remove Household Fail',
    SelectHousehold = '[Household] Select Household',
    LoadHouseholds = '[Household] Load Households',
    LoadHouseholdsSuccess = '[Household] Load Households Success',
    LoadHouseholdsFail = '[Household] Load Households Fail',
}

export class AddHousehold implements Action {
    readonly type = HouseholdActionTypes.AddHousehold;

    constructor(public payload: Household) {
    }
}

export class AddHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.AddHouseholdSuccess;

    constructor(public payload: Household) {
    }
}

export class AddHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.AddHouseholdFail;

    constructor(public payload: Household) {
    }
}

export class UpdateHousehold implements Action {
    readonly type = HouseholdActionTypes.UpdateHousehold;

    constructor(public payload: Household) {
    }
}

export class UpdateHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.UpdateHouseholdFail;

    constructor(public payload: Household) {
    }
}

export class UpdateHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.UpdateHouseholdSuccess;

    constructor(public payload: Household) {
    }
}

export class RemoveHousehold implements Action {
    readonly type = HouseholdActionTypes.RemoveHousehold;

    constructor(public payload: Household) {
    }
}

export class RemoveHouseholdSuccess implements Action {
    readonly type = HouseholdActionTypes.RemoveHouseholdSuccess;

    constructor(public payload: Household) {
    }
}

export class RemoveHouseholdFail implements Action {
    readonly type = HouseholdActionTypes.RemoveHouseholdFail;

    constructor(public payload: Household) {
    }
}

export class SelectHousehold implements Action {
    readonly type = HouseholdActionTypes.SelectHousehold;

    constructor(public payload: number) {
    }
}

export class LoadHouseholds implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholds;
}

export class LoadHouseholdsSuccess implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholdsSuccess;

    constructor(public payload: Household[]) {
    }
}

export class LoadHouseholdsFail implements Action {
    readonly type = HouseholdActionTypes.LoadHouseholdsFail;

    constructor(public payload: any) {
    }
}
