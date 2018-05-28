import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCredentialTypes from './credentialType';
import * as fromRoot from '../../reducers';

export interface UserState {
    credentialTypes: fromCredentialTypes.State;
}

export interface State extends fromRoot.State {
    users: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
    credentialTypes: fromCredentialTypes.reducer
};

export const getUsersState = createFeatureSelector<UserState>('users');

export const getCredentialTypeEntitiesState = createSelector(
    getUsersState,
    state => state.credentialTypes
);

export const {
    selectIds: getCredentialTypeIds,
    selectEntities: getCredentialTypeEntities,
    selectAll: getAllCredentialTypes,
    selectTotal: getTotalCredentialTypes,
} = fromCredentialTypes.adapter.getSelectors(getCredentialTypeEntitiesState);

export const getCredentialTypesLoading = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getLoading
);

export const getCredentialTypeErrorMessage = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getErrorMessage
);

export const getSelectedCredentialTypeId = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getSelectedId
);

export const getSelectedCredentialType = createSelector(
    getCredentialTypeEntities,
    getSelectedCredentialTypeId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);
