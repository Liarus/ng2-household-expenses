import { PagesActions, PagesActionTypes } from './../actions/pages';
import { MenuItem } from '../models/menuItem.model';

export interface State {
    isSidebarExpanded: boolean;
    menuItems: MenuItem[];
}

export function reducer(
    state: State = {
        isSidebarExpanded: false,
        menuItems: []
    },
    action: PagesActions
): State {
    switch (action.type) {
        case PagesActionTypes.CollapseSidebar:
            return {
                ...state,
                isSidebarExpanded: false
            };

        case PagesActionTypes.ExpandSidebar:
            return {
                ...state,
                isSidebarExpanded: true
            };

        case PagesActionTypes.FillMenuItems:
            return {
                ...state,
                menuItems: action.payload
            };

        default:
            return state;
    }
}

export const getIsSidebarExpanded = (state: State) => state.isSidebarExpanded;
export const getMenuItems = (state: State) => state.menuItems;
