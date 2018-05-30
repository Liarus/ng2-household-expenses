import { StatusActions, StatusActionTypes } from '../actions/status';


export interface State {
    activeTabIndex: number;
}

export const initialState: State = {
    activeTabIndex: 0
};

export function reducer(
    state = initialState,
    action: StatusActions ): State {
    switch (action.type) {

        case StatusActionTypes.SelectActiveTabIndex:
            return {
                ...state,
                activeTabIndex: action.payload
            };

        default: {
            return state;
        }
    }
}

export const getActiveTabIndex = (state: State) => state.activeTabIndex;
