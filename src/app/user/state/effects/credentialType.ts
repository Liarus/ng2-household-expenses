import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ToastrService } from 'ngx-toastr';

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
import { HttpError } from '../../../shared/classes/httpError';

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
                catchError(error => of(new AddCredentialTypeFail({errorMessage: HttpError.parse(error)})))
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
                catchError(error => of(new UpdateCredentialTypeFail({errorMessage: HttpError.parse(error)})))
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
                catchError(error => of(new RemoveCredentialTypeFail({errorMessage: HttpError.parse(error)})))
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
                catchError(error => of(new LoadCredentialTypesFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect({dispatch: false})
    errorMessages = this.actions.pipe(
        ofType(CredentialTypeActionTypes.AddCredentialTypeFail,
            CredentialTypeActionTypes.LoadCredentialTypesFail,
            CredentialTypeActionTypes.RemoveCredentialTypeFail,
            CredentialTypeActionTypes.UpdateCredentialTypeFail),
        map((action: any) => action.payload.errorMessage),
        tap(error => this.toastr.error(error, 'Alert!'))
    );

    constructor(private actions: Actions,
                private credentialTypeService: CredentialTypeService,
                private toastr: ToastrService) {
    }
}
