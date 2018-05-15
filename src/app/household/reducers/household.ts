import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Household } from '../models/household.model';
import { HouseholdActions, HouseholdActionTypes } from './../actions/household';

export interface State extends EntityState<Household> {
    selectedHouseholdId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<Household> = createEntityAdapter<Household>({
    selectId: (household: Household) => household.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedHouseholdId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: HouseholdActions
): State {
    switch (action.type) {

        case HouseholdActionTypes.AddHousehold:
        case HouseholdActionTypes.UpdateHousehold:
        case HouseholdActionTypes.RemoveHousehold:
        case HouseholdActionTypes.LoadHouseholds:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case HouseholdActionTypes.AddHouseholdFail:
        case HouseholdActionTypes.LoadHouseholdsFail:
        case HouseholdActionTypes.RemoveHouseholdFail:
        case HouseholdActionTypes.UpdateHouseholdFail:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false
            };

        case HouseholdActionTypes.AddHouseholdSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case HouseholdActionTypes.UpdateHouseholdSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case HouseholdActionTypes.RemoveHouseholdSuccess:
            return adapter.removeOne(action.payload, {
                ...state,
                loading: false
            });

        case HouseholdActionTypes.LoadHouseholdsSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case HouseholdActionTypes.SelectHousehold:
            return {
                ...state,
                errorMessage: '',
                selectedHouseholdId: action.payload
            };

        default: {
            return state;
        }

    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedHouseholdId;
