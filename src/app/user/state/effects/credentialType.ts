import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import {
    CredentialTypeActionTypes,
    AddCredentialType,
    AddCredentialTypeFail,
    AddCredentialTypeSuccess,
    UpdateCredentialType,
    UpdateCredentialTypeFail,
    UpdateCredentialTypeSuccess,
    LoadCredentialTypes,
    LoadCredentialTypesSuccess,
    LoadCredentialTypesFail,
    RemoveCredentialType,
    RemoveCredentialTypeSuccess,
    RemoveCredentialTypeFail
} from '../actions/credentialType';
import { CredentialType } from './../../models/credentialType.model';
import { ModifyCredentialType } from './../../models/requests/modifyCredentialType.model';
import { CredentialTypeService } from './../../services/credentialType.service';
import { CreateCredentialType } from './../../models/requests/createCredentialType.model';

@Injectable()
export class CredentialTypeEffects {

    @Effect()
    addHousehold = this.actions.pipe(
        ofType(CredentialTypeActionTypes.AddCredentialType),
        map((action: AddCredentialType) => action.payload),
        switchMap((request: CreateCredentialType) =>
            this.credentialTypeService.create(request)
            .pipe(
                map(response => new AddCredentialTypeSuccess(
                    {
                        id: response,
                        name: request.name,
                        code: request.code,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddCredentialTypeFail({errorMessage: error})))
            )
        )
    );

    @Effect()
    updateHousehold = this.actions.pipe(
        ofType(CredentialTypeActionTypes.UpdateCredentialType),
        map((action: UpdateCredentialType) => action.payload),
        switchMap((request: ModifyCredentialType) =>
            this.credentialTypeService.update(request)
            .pipe(
                map(response => new UpdateCredentialTypeSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        code: request.code,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdateCredentialTypeFail({errorMessage: error})))
            )
        )
    );

    @Effect()
    deleteHousehold = this.actions.pipe(
        ofType(CredentialTypeActionTypes.RemoveCredentialType),
        map((action: RemoveCredentialType) => action.payload.credentialTypeId),
        switchMap((credentialTypeId: number) =>
            this.credentialTypeService.delete(credentialTypeId)
            .pipe(
                map(response => new RemoveCredentialTypeSuccess({credentialTypeId: credentialTypeId})),
                catchError(error => of(new RemoveCredentialTypeFail({errorMessage: error})))
            )
        )
    );

    @Effect()
    loadHouseholds = this.actions.pipe(
        ofType(CredentialTypeActionTypes.LoadCredentialTypes),
        switchMap((action: LoadCredentialTypes) =>
            this.credentialTypeService.getAll()
            .pipe(
                map((response: CredentialType[]) => new LoadCredentialTypesSuccess(response)),
                catchError(error => of(new LoadCredentialTypesFail({errorMessage: error})))
            )
        )
    );

    constructor(private actions: Actions,
                private credentialTypeService: CredentialTypeService) {
    }
}
