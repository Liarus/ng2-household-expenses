import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import { HouseholdService } from './../services/household.service';
import {
    HouseholdActionTypes,
    AddHousehold,
    AddHouseholdFail,
    AddHouseholdSuccess,
    UpdateHousehold,
    UpdateHouseholdSuccess,
    LoadHouseholdsFail
} from '../actions/household';
import { CreateHousehold } from '../models/requests/createHousehold.model';
import { UpdateHouseholdFail, LoadHouseholds, LoadHouseholdsSuccess } from './../actions/household';
import { ModifyHousehold } from './../models/requests/modifyHousehold.model';
import { Household } from './../models/household.model';

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
                        id: response.Id,
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
                catchError(error => of(new AddHouseholdFail(error)))
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
                catchError(error => of(new UpdateHouseholdFail(error)))
            )
        )
    );

    @Effect()
    loadHouseholds = this.actions.pipe(
        ofType(HouseholdActionTypes.LoadHouseholds),
        map((action: LoadHouseholds) => action.payload),
        switchMap((userId: number) =>
            this.householdService.getAllForUser(userId)
            .pipe(
                map((response: Household[]) => new LoadHouseholdsSuccess(response)),
                catchError(error => of(new LoadHouseholdsFail(error)))
            )
        )
    );

    constructor(private actions: Actions,
                private householdService: HouseholdService) {
    }
}
