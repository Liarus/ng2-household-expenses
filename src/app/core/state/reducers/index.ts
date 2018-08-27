import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPages from './pages';
import * as fromRoot from '../../../reducers';

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

export const getPagesState = createSelector(
    getCoreState,
    state => state.pages
);

export const getIsSidebarExpanded = createSelector(
    getPagesState,
    fromPages.getIsSidebarExpanded
);

export const getMenuItems = createSelector(
    getPagesState,
    fromPages.getMenuItems
);

export const getOpenedModalName = createSelector(
    getPagesState,
    fromPages.getOpenedModalName
);

export const getWindowWidth = createSelector(
    getPagesState,
    fromPages.getWindowWidth
);

export const getWindowHeight = createSelector(
    getPagesState,
    fromPages.getWindowHeight
);

