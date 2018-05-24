import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPages from './pages';
import * as fromRoot from '../../reducers';

export interface CoreState {
    pages: fromPages.State;
}

export interface State extends fromRoot.State {
    core: CoreState;
}

export const reducers: ActionReducerMap<CoreState> = {
    pages: fromPages.reducer
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export const getCompletePagesState = createSelector(
    getCoreState,
    (state: CoreState) => state.pages
);

export const getIsSidebarExpanded = createSelector(
    getCompletePagesState,
    fromPages.getIsSidebarExpanded
);

export const getMenuItems = createSelector(
    getCompletePagesState,
    fromPages.getMenuItems
);

export const getOpenedModalName = createSelector(
    getCompletePagesState,
    fromPages.getOpenedModalName
);
