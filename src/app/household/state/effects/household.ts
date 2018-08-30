import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { ToastrService } from 'ngx-toastr';

import { HouseholdService } from './../../services/household.service';
import {
    HouseholdActionTypes,
    AddHousehold,
    AddHouseholdFail,
    AddHouseholdSuccess,
    UpdateHousehold,
    UpdateHouseholdFail,
    UpdateHouseholdSuccess,
    LoadHouseholds,
    LoadHouseholdsSuccess,
    LoadHouseholdsFail,
    RemoveHousehold,
    RemoveHouseholdSuccess,
    RemoveHouseholdFail
} from '../actions/household';
import { CreateHousehold } from '../../models/requests/createHousehold.model';
import { ModifyHousehold } from './../../models/requests/modifyHousehold.model';
import { Household } from './../../models/household.model';
import { HttpError } from '../../../shared/classes/httpError';

@Injectable()
export class HouseholdEffects {

    @Effect()
    addHousehold = this.actions.pipe(
        ofType(HouseholdActionTypes.AddHousehold),
        map((action: AddHousehold) => action.payload),
        switchMap((request: CreateHousehold) =>
            this.householdService.create(request)
            .pipe(
                map(response => new AddHouseholdSuccess(
                    {
                        id: response,
                        name: request.name,
                        symbol: request.symbol,
                        description: request.description,
                        street: request.street,
                        city: request.city,
                        country: request.country,
                        zipCode: request.zipCode,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddHouseholdFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect()
    updateHousehold = this.actions.pipe(
        ofType(HouseholdActionTypes.UpdateHousehold),
        map((action: UpdateHousehold) => action.payload),
        switchMap((request: ModifyHousehold) =>
            this.householdService.update(request)
            .pipe(
                map(response => new UpdateHouseholdSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        symbol: request.symbol,
                        description: request.description,
                        street: request.street,
                        city: request.city,
                        country: request.country,
                        zipCode: request.zipCode,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdateHouseholdFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect()
    deleteHousehold = this.actions.pipe(
        ofType(HouseholdActionTypes.RemoveHousehold),
        map((action: RemoveHousehold) => action.payload.householdId),
        switchMap((householdId: number) =>
            this.householdService.delete(householdId)
            .pipe(
                map(response => new RemoveHouseholdSuccess({householdId: householdId})),
                catchError(error => of(new RemoveHouseholdFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect()
    loadHouseholds = this.actions.pipe(
        ofType(HouseholdActionTypes.LoadHouseholds),
        map((action: LoadHouseholds) => action.payload.userId),
        switchMap((userId: number) =>
            this.householdService.getAllForUser(userId)
            .pipe(
                map((response: Household[]) => new LoadHouseholdsSuccess(response)),
                catchError(error => of(new LoadHouseholdsFail({errorMessage: HttpError.parse(error)})))
            )
        )
    );

    @Effect({dispatch: false})
    errorMessages = this.actions.pipe(
        ofType(HouseholdActionTypes.AddHouseholdFail,
            HouseholdActionTypes.LoadHouseholdsFail,
            HouseholdActionTypes.RemoveHouseholdFail,
            HouseholdActionTypes.UpdateHouseholdFail),
        map((action: any) => action.payload.errorMessage),
        tap(error => this.toastr.error(error, 'Alert!'))
    );

    constructor(private actions: Actions,
                private householdService: HouseholdService,
                private toastr: ToastrService) {
    }
}
