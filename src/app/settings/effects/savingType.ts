import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { SavingTypeService } from './../services/savingType.service';
import {
    SavingTypeActionTypes,
    AddSavingType,
    AddSavingTypeFail,
    AddSavingTypeSuccess,
    UpdateSavingType,
    UpdateSavingTypeFail,
    UpdateSavingTypeSuccess,
    LoadSavingTypes,
    LoadSavingTypesSuccess,
    LoadSavingTypesFail,
    RemoveSavingType,
    RemoveSavingTypeSuccess,
    RemoveSavingTypeFail
} from '../actions/savingType';
import { CreateSavingType } from '../models/requests/createSavingType.model';
import { ModifySavingType } from './../models/requests/modifySavingType.model';
import { DeleteSavingType } from './../models/requests/deleteSavingType.model';
import { SavingType } from './../models/savingType.model';

@Injectable()
export class SavingTypeEffects {

    @Effect()
    addSavingType = this.actions.pipe(
        ofType(SavingTypeActionTypes.AddSavingType),
        map((action: AddSavingType) => action.payload),
        switchMap((request: CreateSavingType) =>
            this.savingTypeService.create(request)
            .pipe(
                map(response => new AddSavingTypeSuccess(
                    {
                        id: response,
                        name: request.name,
                        symbol: request.symbol,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddSavingTypeFail(error)))
            )
        )
    );

    @Effect()
    updateSavingType = this.actions.pipe(
        ofType(SavingTypeActionTypes.UpdateSavingType),
        map((action: UpdateSavingType) => action.payload),
        switchMap((request: ModifySavingType) =>
            this.savingTypeService.update(request)
            .pipe(
                map(response => new UpdateSavingTypeSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        symbol: request.symbol,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdateSavingTypeFail(error)))
            )
        )
    );

    @Effect()
    deleteSavingType = this.actions.pipe(
        ofType(SavingTypeActionTypes.RemoveSavingType),
        map((action: RemoveSavingType) => action.payload),
        switchMap((request: DeleteSavingType) =>
            this.savingTypeService.delete(request)
            .pipe(
                map(response => new RemoveSavingTypeSuccess(request.id)),
                catchError(error => of(new RemoveSavingTypeFail(error)))
            )
        )
    );

    @Effect()
    loadSavingTypes = this.actions.pipe(
        ofType(SavingTypeActionTypes.LoadSavingTypes),
        map((action: LoadSavingTypes) => action.payload),
        switchMap((userId: number) =>
            this.savingTypeService.getAllForUser(userId)
            .pipe(
                map((response: SavingType[]) => new LoadSavingTypesSuccess(response)),
                catchError(error => of(new LoadSavingTypesFail(error)))
            )
        )
    );

    constructor(private actions: Actions,
                private savingTypeService: SavingTypeService) {
    }
}