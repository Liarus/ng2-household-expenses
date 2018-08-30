import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { CredentialType } from './../../models/credentialType.model';
import { CredentialTypeActions, CredentialTypeActionTypes, AddCredentialTypeSuccess } from './../actions/credentialType';

export interface State extends EntityState<CredentialType> {
    selectedCredentialTypeId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<CredentialType> = createEntityAdapter<CredentialType>({
    selectId: (credentialType: CredentialType) => credentialType.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedCredentialTypeId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: CredentialTypeActions ): State {
    switch (action.type) {

        case CredentialTypeActionTypes.AddCredentialType:
        case CredentialTypeActionTypes.UpdateCredentialType:
        case CredentialTypeActionTypes.RemoveCredentialType:
        case CredentialTypeActionTypes.LoadCredentialTypes:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case CredentialTypeActionTypes.AddCredentialTypeFail:
        case CredentialTypeActionTypes.LoadCredentialTypesFail:
        case CredentialTypeActionTypes.RemoveCredentialTypeFail:
        case CredentialTypeActionTypes.UpdateCredentialTypeFail:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                loading: false
            };

        case CredentialTypeActionTypes.AddCredentialTypeSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case CredentialTypeActionTypes.UpdateCredentialTypeSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case CredentialTypeActionTypes.RemoveCredentialTypeSuccess:
            return adapter.removeOne(action.payload.credentialTypeId, {
                ...state,
                loading: false
            });

        case CredentialTypeActionTypes.LoadCredentialTypesSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case CredentialTypeActionTypes.SelectCredentialType:
            return {
                ...state,
                errorMessage: '',
                selectedCredentialTypeId: action.payload.credentialTypeId
            };

        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedCredentialTypeId;
