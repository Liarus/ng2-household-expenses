import {
    ActionReducerMap,
    ActionReducer,
    MetaReducer,
    createFeatureSelector,
    createSelector
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromPages from '../core/reducers/pages';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { RouterStateUrl } from './../shared/states/routerState';

export interface State {
    pages: fromPages.State;
    router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
    pages: fromPages.reducer,
    router: fromRouter.routerReducer
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];


export const getPagesState = createFeatureSelector<fromPages.State>('pages');

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
