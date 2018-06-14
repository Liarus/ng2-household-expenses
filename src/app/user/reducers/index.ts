import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCredentialTypes from './credentialType';
import * as fromPermissions from './permission';
import * as fromStatus from './status';
import * as fromRoles from './role';
import * as fromRoot from '../../reducers';

export interface UserState {
    credentialTypes: fromCredentialTypes.State;
    permissions: fromPermissions.State;
    roles: fromRoles.State;
    status: fromStatus.State;
}

export interface State extends fromRoot.State {
    users: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
    credentialTypes: fromCredentialTypes.reducer,
    permissions: fromPermissions.reducer,
    roles: fromRoles.reducer,
    status: fromStatus.reducer
};

export const getUsersState = createFeatureSelector<UserState>('users');

export const getCredentialTypeEntitiesState = createSelector(
    getUsersState,
    state => state.credentialTypes
);

export const {
    selectIds: getCredentialTypeIds,
    selectEntities: getCredentialTypeEntities,
    selectAll: getAllCredentialTypes,
    selectTotal: getTotalCredentialTypes,
} = fromCredentialTypes.adapter.getSelectors(getCredentialTypeEntitiesState);

export const getCredentialTypesLoading = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getLoading
);

export const getCredentialTypeErrorMessage = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getErrorMessage
);

export const getSelectedCredentialTypeId = createSelector(
    getCredentialTypeEntitiesState,
    fromCredentialTypes.getSelectedId
);

export const getSelectedCredentialType = createSelector(
    getCredentialTypeEntities,
    getSelectedCredentialTypeId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getPermissionEntitiesState = createSelector(
    getUsersState,
    state => state.permissions
);

export const {
    selectIds: getPermissionIds,
    selectEntities: getPermissionEntities,
    selectAll: getAllPermissions,
    selectTotal: getTotalPermissions,
} = fromPermissions.adapter.getSelectors(getPermissionEntitiesState);

export const getPermissionsLoading = createSelector(
    getPermissionEntitiesState,
    fromPermissions.getLoading
);

export const getPermissionErrorMessage = createSelector(
    getPermissionEntitiesState,
    fromPermissions.getErrorMessage
);

export const getSelectedPermissionId = createSelector(
    getPermissionEntitiesState,
    fromPermissions.getSelectedId
);

export const getSelectedPermission = createSelector(
    getPermissionEntitiesState,
    getSelectedPermissionId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getStatusState = createSelector(
    getUsersState,
    state => state.status
);

export const getActiveTabIndex = createSelector(
    getStatusState,
    fromStatus.getActiveTabIndex
);

export const getRoleEntitiesState = createSelector(
    getUsersState,
    state => state.roles
);

export const {
    selectIds: getRoleIds,
    selectEntities: getRoleEntities,
    selectAll: getAllRoles,
    selectTotal: getTotalRoles,
} = fromRoles.adapter.getSelectors(getRoleEntitiesState);

export const getRolesLoading = createSelector(
    getRoleEntitiesState,
    fromRoles.getLoading
);

export const getRoleErrorMessage = createSelector(
    getRoleEntitiesState,
    fromRoles.getErrorMessage
);

export const getSelectedRoleId = createSelector(
    getRoleEntitiesState,
    fromRoles.getSelectedId
);

export const getSelectedRole = createSelector(
    getRoleEntities,
    getSelectedRoleId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getSelectedRoleWithPermissions = createSelector(
    getRoleEntities,
    getSelectedRoleId,
    getPermissionEntities,
    (entities, selectedId, permissions) => {
        const role =  selectedId && entities[selectedId];
        return {...role, permissions: role.permissionIds.map(permissionId => permissions[permissionId])};
    }
);

export const getRolesWithPermissions = createSelector(
    getAllRoles,
    getPermissionEntities,
    (roles, permissions) => {
        return roles.map( role => {
            return {...role, permissions: role.permissionIds.map(permissionId => permissions[permissionId])};
        });
    }
);
