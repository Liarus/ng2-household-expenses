import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Role } from './../../models/role.model';
import { RoleActions, RoleActionTypes, AssignPermissionSuccess } from './../actions/role';

export interface State extends EntityState<Role> {
    selectedRoleId: number;
    loading: boolean;
    errorMessage: string;
}

export const adapter: EntityAdapter<Role> = createEntityAdapter<Role>({
    selectId: (role: Role) => role.id,
    sortComparer: false
});

export const initialState: State = adapter.getInitialState({
    selectedRoleId: null,
    loading: false,
    errorMessage: ''
});

export function reducer(
    state = initialState,
    action: RoleActions ): State {
    switch (action.type) {

        case RoleActionTypes.AddRole:
        case RoleActionTypes.UpdateRole:
        case RoleActionTypes.RemoveRole:
        case RoleActionTypes.LoadRoles:
        case RoleActionTypes.AssignPermission:
        case RoleActionTypes.UnassignPermission:
            return {
                ...state,
                errorMessage: '',
                loading: true
            };

        case RoleActionTypes.AddRoleFail:
        case RoleActionTypes.LoadRolesFail:
        case RoleActionTypes.RemoveRoleFail:
        case RoleActionTypes.UpdateRoleFail:
        case RoleActionTypes.AssignPermissionFail:
        case RoleActionTypes.UnassignPermissionFail:
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
                loading: false
            };

        case RoleActionTypes.AddRoleSuccess:
            return adapter.addOne(action.payload, {
                ...state,
                loading: false
            });

        case RoleActionTypes.UpdateRoleSuccess:
            return adapter.updateOne({
                    id: action.payload.id,
                    changes: action.payload
                },
                {
                    ...state,
                    loading: false
                }
            );

        case RoleActionTypes.RemoveRoleSuccess:
            return adapter.removeOne(action.payload.roleId, {
                ...state,
                loading: false
            });

        case RoleActionTypes.LoadRolesSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                loading: false
            });

        case RoleActionTypes.SelectRole:
            return {
                ...state,
                errorMessage: '',
                selectedRoleId: action.payload.roleId
            };

        case RoleActionTypes.AssignPermissionSuccess: {
            const role = state.entities[action.payload.roleId];
            // role.permissionIds.push(action.payload.permissionId);
            // return adapter.updateOne({
            //     id: action.payload.roleId,
            //     changes: role
            // },
            // {
            //     ...state,
            //     loading: false
            // });
            return {
                ...state,
                [action.payload.roleId] : {
                     ...role,
                     permissionIds : role.permissionIds.concat(action.payload.permissionId)
                }
            };
        }

        case RoleActionTypes.UnassignPermissionSuccess:
        {
            const role = state.entities[action.payload.roleId];
            return {
                ...state,
                [action.payload.roleId] : {
                     ...role,
                     permissionIds:
                        role.permissionIds.filter(permission => permission !== action.payload.permissionId)
                }
            };
        }

        default: {
            return state;
        }
    }
}

export const getLoading = (state: State) => state.loading;
export const getErrorMessage = (state: State) => state.errorMessage;
export const getSelectedId = (state: State) => state.selectedRoleId;
