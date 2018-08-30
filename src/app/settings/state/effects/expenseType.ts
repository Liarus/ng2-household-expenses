import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ToastrService } from 'ngx-toastr';

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
import { ExpenseType } from './../../models/expenseType.model';
import { HttpError } from '../../../shared/classes/httpError';

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
                catchError(error => of(new AddExpenseTypeFail({errorMessage: HttpError.parse(error)})))
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
                catchError(error => of(new UpdateExpenseTypeFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect()
    deleteExpenseType = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.RemoveExpenseType),
        map((action: RemoveExpenseType) => action.payload.expenseTypeId),
        switchMap((expenseTypeId: number) =>
            this.expenseTypeService.delete(expenseTypeId)
            .pipe(
                map(response => new RemoveExpenseTypeSuccess({expenseTypeId: expenseTypeId})),
                catchError(error => of(new RemoveExpenseTypeFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect()
    loadExpenseTypes = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.LoadExpenseTypes),
        map((action: LoadExpenseTypes) => action.payload.userId),
        switchMap((userId: number) =>
            this.expenseTypeService.getAllForUser(userId)
            .pipe(
                map((response: ExpenseType[]) => new LoadExpenseTypesSuccess(response)),
                catchError(error => of(new LoadExpenseTypesFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect({dispatch: false})
    errorMessages = this.actions.pipe(
        ofType(ExpenseTypeActionTypes.AddExpenseTypeFail,
            ExpenseTypeActionTypes.LoadExpenseTypesFail,
            ExpenseTypeActionTypes.RemoveExpenseTypeFail,
            ExpenseTypeActionTypes.UpdateExpenseTypeFail),
        map((action: any) => action.payload.errorMessage),
        tap(error => this.toastr.error(error, 'Alert!'))
    );

    constructor(private actions: Actions,
                private expenseTypeService: ExpenseTypeService,
                private toastr: ToastrService) {
    }
}
