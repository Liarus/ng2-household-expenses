import { Action } from '@ngrx/store';

import { CreateExpenseType } from '../../models/requests/createExpenseType.model';
import { ExpenseType } from '../../models/expenseType.model';
import { ModifyExpenseType } from '../../models/requests/modifyExpenseType.model';
import { DeleteExpenseType } from '../../models/requests/deleteExpenseType.model';

export enum ExpenseTypeActionTypes {
    AddExpenseType = '[ExpenseType] Add Expense Type',
    AddExpenseTypeSuccess = '[ExpenseType] Add Expense Type Success',
    AddExpenseTypeFail = '[ExpenseType] Add Expense Type Fail',
    UpdateExpenseType = '[ExpenseType] Update Expense Type',
    UpdateExpenseTypeSuccess = '[ExpenseType] Update Expense Type Success',
    UpdateExpenseTypeFail = '[ExpenseType] Update Expense Type Fail',
    RemoveExpenseType = '[ExpenseType] Remove Expense Type',
    RemoveExpenseTypeSuccess = '[ExpenseType] Remove Expense Type Success',
    RemoveExpenseTypeFail = '[ExpenseType] Remove Expense Type Fail',
    SelectExpenseType = '[ExpenseType] Select Expense Type',
    LoadExpenseTypes = '[ExpenseType] Load Expense Types',
    LoadExpenseTypesSuccess = '[ExpenseType] Load Expense Types Success',
    LoadExpenseTypesFail = '[ExpenseType] Load Expense Types Fail'
}

export class AddExpenseType implements Action {
    readonly type = ExpenseTypeActionTypes.AddExpenseType;

    constructor(public payload: CreateExpenseType) {
    }
}

export class AddExpenseTypeSuccess implements Action {
    readonly type = ExpenseTypeActionTypes.AddExpenseTypeSuccess;

    constructor(public payload: ExpenseType) {
    }
}

export class AddExpenseTypeFail implements Action {
    readonly type = ExpenseTypeActionTypes.AddExpenseTypeFail;

    constructor(public payload: string) {
    }
}

export class UpdateExpenseType implements Action {
    readonly type = ExpenseTypeActionTypes.UpdateExpenseType;

    constructor(public payload: ModifyExpenseType) {
    }
}

export class UpdateExpenseTypeFail implements Action {
    readonly type = ExpenseTypeActionTypes.UpdateExpenseTypeFail;

    constructor(public payload: string) {
    }
}

export class UpdateExpenseTypeSuccess implements Action {
    readonly type = ExpenseTypeActionTypes.UpdateExpenseTypeSuccess;

    constructor(public payload: Partial<ExpenseType>) {
    }
}

export class RemoveExpenseType implements Action {
    readonly type = ExpenseTypeActionTypes.RemoveExpenseType;

    constructor(public payload: DeleteExpenseType) {
    }
}

export class RemoveExpenseTypeSuccess implements Action {
    readonly type = ExpenseTypeActionTypes.RemoveExpenseTypeSuccess;

    constructor(public payload: number) {
    }
}

export class RemoveExpenseTypeFail implements Action {
    readonly type = ExpenseTypeActionTypes.RemoveExpenseTypeFail;

    constructor(public payload: string) {
    }
}

export class SelectExpenseType implements Action {
    readonly type = ExpenseTypeActionTypes.SelectExpenseType;

    constructor(public payload: number) {
    }
}

export class LoadExpenseTypes implements Action {
    readonly type = ExpenseTypeActionTypes.LoadExpenseTypes;

    constructor(public payload: number) {
    }
}

export class LoadExpenseTypesSuccess implements Action {
    readonly type = ExpenseTypeActionTypes.LoadExpenseTypesSuccess;

    constructor(public payload: ExpenseType[]) {
    }
}

export class LoadExpenseTypesFail implements Action {
    readonly type = ExpenseTypeActionTypes.LoadExpenseTypesFail;

    constructor(public payload: string) {
    }
}

export type ExpenseTypeActions =
    AddExpenseType
    | AddExpenseTypeSuccess
    | AddExpenseTypeFail
    | UpdateExpenseType
    | UpdateExpenseTypeSuccess
    | UpdateExpenseTypeFail
    | RemoveExpenseType
    | RemoveExpenseTypeSuccess
    | RemoveExpenseTypeFail
    | SelectExpenseType
    | LoadExpenseTypes
    | LoadExpenseTypesSuccess
    | LoadExpenseTypesFail;
