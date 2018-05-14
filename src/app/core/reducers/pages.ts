import { PagesActions, PagesActionTypes } from './../actions/pages';
import { MenuItem } from '../models/menuItem.model';

export interface State {
    isSidebarExpanded: boolean;
    menuItems: MenuItem[];
    openedModalName: string;
}

export function reducer(
    state: State = {
        isSidebarExpanded: false,
        menuItems: [],
        openedModalName: null
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
        case PagesActionTypes.OpenModal:
            return {
                ...state,
                openedModalName: action.payload
            };
        case PagesActionTypes.CloseModal:
            return {
                ...state,
                openedModalName: null
            };

        default:
            return state;
    }
}

export const getIsSidebarExpanded = (state: State) => state.isSidebarExpanded;
export const getMenuItems = (state: State) => state.menuItems;
export const getOpenedModalName = (state: State) => state.openedModalName;
