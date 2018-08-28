import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { SavingType } from '../../models/savingType.model';
import { SavingTypeActions, SavingTypeActionTypes } from './../actions/savingType';

export interface State extends EntityState<SavingType> {
    selectedSavingTypeId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<SavingType> = createEntityAdapter<SavingType>({
    selectId: (savingType: SavingType) => savingType.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedSavingTypeId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: SavingTypeActions
): State {
    switch (action.type) {

        case SavingTypeActionTypes.AddSavingType:
        case SavingTypeActionTypes.UpdateSavingType:
        case SavingTypeActionTypes.RemoveSavingType:
        case SavingTypeActionTypes.LoadSavingTypes:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case SavingTypeActionTypes.AddSavingTypeFail:
        case SavingTypeActionTypes.LoadSavingTypesFail:
        case SavingTypeActionTypes.RemoveSavingTypeFail:
        case SavingTypeActionTypes.UpdateSavingTypeFail:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false
            };

        case SavingTypeActionTypes.AddSavingTypeSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case SavingTypeActionTypes.UpdateSavingTypeSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case SavingTypeActionTypes.RemoveSavingTypeSuccess:
            return adapter.removeOne(action.payload, {
                ...state,
                loading: false
            });

        case SavingTypeActionTypes.LoadSavingTypesSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case SavingTypeActionTypes.SelectSavingType:
            return {
                ...state,
                errorMessage: '',
                selectedSavingTypeId: action.payload
            };

        default: {
            return state;
        }

    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedSavingTypeId;
