import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSavingTypes from './savingType';
import * as fromExpenseTypes from './expenseType';
import * as fromRoot from '../../reducers';

export interface SettingState {
    savingTypes: fromSavingTypes.State;
    expenseTypes: fromExpenseTypes.State;
}

export interface State extends fromRoot.State {
    settings: SettingState;
}

export const reducers: ActionReducerMap<SettingState> = {
    savingTypes: fromSavingTypes.reducer,
    expenseTypes: fromExpenseTypes.reducer
};

export const getSettingsState = createFeatureSelector<SettingState>('settings');

export const getSavingTypeEntitiesState = createSelector(
    getSettingsState,
    state => state.savingTypes
);

export const {
    selectIds: getSavingTypeIds,
    selectEntities: getSavingTypeEntities,
    selectAll: getAllSavingTypes,
    selectTotal: getTotalSavingTypes,
} = fromSavingTypes.adapter.getSelectors(getSavingTypeEntitiesState);

export const getSavingTypesLoading = createSelector(
    getSavingTypeEntitiesState,
    fromSavingTypes.getLoading
);

export const getSavingTypeErrorMessage = createSelector(
    getSavingTypeEntitiesState,
    fromSavingTypes.getErrorMessage
);

export const getSelectedSavingTypeId = createSelector(
    getSavingTypeEntitiesState,
    fromSavingTypes.getSelectedId
);

export const getSelectedSavingTypeld = createSelector(
    getSavingTypeEntities,
    getSelectedSavingTypeId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getExpenseTypeEntitiesState = createSelector(
    getSettingsState,
    state => state.expenseTypes
);

export const {
    selectIds: getExpenseTypeIds,
    selectEntities: getExpenseTypeEntities,
    selectAll: getAllExpenseTypes,
    selectTotal: getTotalExpenseTypes,
} = fromExpenseTypes.adapter.getSelectors(getExpenseTypeEntitiesState);

export const getExpenseTypesLoading = createSelector(
    getExpenseTypeEntitiesState,
    fromExpenseTypes.getLoading
);

export const getExpenseTypeErrorMessage = createSelector(
    getExpenseTypeEntitiesState,
    fromExpenseTypes.getErrorMessage
);

export const getSelectedExpenseTypeId = createSelector(
    getExpenseTypeEntitiesState,
    fromExpenseTypes.getSelectedId
);

export const getSelectedExpenseTypeld = createSelector(
    getExpenseTypeEntities,
    getSelectedExpenseTypeId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);
