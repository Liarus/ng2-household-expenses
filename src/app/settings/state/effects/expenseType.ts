import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { ExpenseTypeService } from './../../services/expenseType.service';
import {
    ExpenseTypeActionTypes,
    AddExpenseType,
    AddExpenseTypeFail,
    AddExpenseTypeSuccess,
    UpdateExpenseType,
    UpdateExpenseTypeFail,
    UpdateExpenseTypeSuccess,
    LoadExpenseTypes,
    LoadExpenseTypesSuccess,
    LoadExpenseTypesFail,
    RemoveExpenseType,
    RemoveExpenseTypeSuccess,
    RemoveExpenseTypeFail
} from '../actions/expenseType';
import { CreateExpenseType } from '../../models/requests/createExpenseType.model';
import { ModifyExpenseType } from './../../models/requests/modifyExpenseType.model';
import { DeleteExpenseType } from './../../models/requests/deleteExpenseType.model';
import { ExpenseType } from './../../models/expenseType.model';

@Injectable()
export class ExpenseTypeEffects {

    @Effect()
    addExpenseType = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.AddExpenseType),
        map((action: AddExpenseType) => action.payload),
        switchMap((request: CreateExpenseType) =>
            this.expenseTypeService.create(request)
            .pipe(
                map(response => new AddExpenseTypeSuccess(
                    {
                        id: response,
                        name: request.name,
                        symbol: request.symbol,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddExpenseTypeFail(error)))
            )
        )
    );

    @Effect()
    updateExpenseType = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.UpdateExpenseType),
        map((action: UpdateExpenseType) => action.payload),
        switchMap((request: ModifyExpenseType) =>
            this.expenseTypeService.update(request)
            .pipe(
                map(response => new UpdateExpenseTypeSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        symbol: request.symbol,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdateExpenseTypeFail(error)))
            )
        )
    );

    @Effect()
    deleteExpenseType = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.RemoveExpenseType),
        map((action: RemoveExpenseType) => action.payload),
        switchMap((request: DeleteExpenseType) =>
            this.expenseTypeService.delete(request)
            .pipe(
                map(response => new RemoveExpenseTypeSuccess(request.id)),
                catchError(error => of(new RemoveExpenseTypeFail(error)))
            )
        )
    );

    @Effect()
    loadExpenseTypes = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.LoadExpenseTypes),
        map((action: LoadExpenseTypes) => action.payload),
        switchMap((userId: number) =>
            this.expenseTypeService.getAllForUser(userId)
            .pipe(
                map((response: ExpenseType[]) => new LoadExpenseTypesSuccess(response)),
                catchError(error => of(new LoadExpenseTypesFail(error)))
            )
        )
    );

    constructor(private actions: Actions,
                private expenseTypeService: ExpenseTypeService) {
    }
}
