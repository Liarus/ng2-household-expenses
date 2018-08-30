import { PagesActions, PagesActionTypes } from './../actions/pages';
import { MenuItem } from '../../models/menuItem.model';

export interface State {
    isSidebarExpanded: boolean;
    menuItems: MenuItem[];
    openedModalName: string;
    windowHeight: number;
    windowWidth: number;
}

export function reducer(
    state: State = {
        isSidebarExpanded: false,
        menuItems: [],
        openedModalName: null,
        windowHeight: window.screen.height,
        windowWidth: window.screen.width
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
                openedModalName: action.payload.modalName
            };

        case PagesActionTypes.CloseModal:
            return {
                ...state,
                openedModalName: null
            };

        case PagesActionTypes.ResizeWindow: {
            const height: number = action.payload.height;
            const width: number = action.payload.width;
            const isMobile: boolean = width < 768 ? true : false;
            const expanded: boolean = isMobile ? false : state.isSidebarExpanded;
            return {
                ...state,
                windowHeight: height,
                windowWidth: width,
                isSidebarExpanded: expanded
            };
        }

        default:
            return state;
    }
}

export const getIsSidebarExpanded = (state: State) => state.isSidebarExpanded;
export const getMenuItems = (state: State) => state.menuItems;
export const getOpenedModalName = (state: State) => state.openedModalName;
export const getWindowWidth = (state: State) => state.windowWidth;
export const getWindowHeight = (state: State) => state.windowHeight;
