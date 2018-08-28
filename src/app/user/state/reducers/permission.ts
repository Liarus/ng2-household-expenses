import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Permission } from './../../models/permission.model';
import { PermissionActions, PermissionActionTypes } from './../actions/permission';

export interface State extends EntityState<Permission> {
    selectedPermissionId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<Permission> = createEntityAdapter<Permission>({
    selectId: (permission: Permission) => permission.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedPermissionId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: PermissionActions ): State {
    switch (action.type) {

        case PermissionActionTypes.AddPermission:
        case PermissionActionTypes.UpdatePermission:
        case PermissionActionTypes.RemovePermission:
        case PermissionActionTypes.LoadPermissions:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case PermissionActionTypes.AddPermissionFail:
        case PermissionActionTypes.LoadPermissionsFail:
        case PermissionActionTypes.RemovePermissionFail:
        case PermissionActionTypes.UpdatePermissionFail:
            return {
                ...state,
                errorMessage: action.payload,
                loading: false
            };

        case PermissionActionTypes.AddPermissionSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case PermissionActionTypes.UpdatePermissionSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case PermissionActionTypes.RemovePermissionSuccess:
            return adapter.removeOne(action.payload, {
                ...state,
                loading: false
            });

        case PermissionActionTypes.LoadPermissionsSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case PermissionActionTypes.SelectPermission:
            return {
                ...state,
                errorMessage: '',
                selectedPermissionId: action.payload
            };

        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedPermissionId;
