import { Action } from '@ngrx/store';

import { CreateRole } from '../../models/requests/createRole.model';
import { Role } from '../../models/role.model';
import { ModifyRole } from '../../models/requests/modifyRole.model';

export enum RoleActionTypes {
    AddRole = '[Role] Add Role',
    AddRoleSuccess = '[Role API] Add Role Success',
    AddRoleFail = '[Role API] Add Role Fail',
    UpdateRole = '[Role] Update Role',
    UpdateRoleSuccess = '[Role API] Update Role Success',
    UpdateRoleFail = '[Role API] Update Role Fail',
    RemoveRole = '[Role] Remove Role',
    RemoveRoleSuccess = '[Role API] Remove Role Success',
    RemoveRoleFail = '[Role API] Remove Role Fail',
    SelectRole = '[Role] Select Role',
    LoadRoles = '[Role] Load Role',
    LoadRolesSuccess = '[Role API] Load Role Success',
    LoadRolesFail = '[Role API] Load Role Fail',
    AssignPermission = '[Role] Assign Permission',
    AssignPermissionSuccess = '[Rol APIe] Assign Permission Success',
    AssignPermissionFail = '[Role API] Assign Permission Fail',
    UnassignPermission = '[Role] Unassign Permission',
    UnassignPermissionSuccess = '[Role API] Unassign Permission Success',
    UnassignPermissionFail = '[Role API] Unassign Permission Fail'
}

export class AddRole implements Action {
    readonly type = RoleActionTypes.AddRole;

    constructor(public payload: CreateRole) {
    }
}

export class AddRoleSuccess implements Action {
    readonly type = RoleActionTypes.AddRoleSuccess;

    constructor(public payload: Role) {
    }
}

export class AddRoleFail implements Action {
    readonly type = RoleActionTypes.AddRoleFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateRole implements Action {
    readonly type = RoleActionTypes.UpdateRole;

    constructor(public payload: ModifyRole) {
    }
}

export class UpdateRoleFail implements Action {
    readonly type = RoleActionTypes.UpdateRoleFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdateRoleSuccess implements Action {
    readonly type = RoleActionTypes.UpdateRoleSuccess;

    constructor(public payload: Partial<Role>) {
    }
}

export class RemoveRole implements Action {
    readonly type = RoleActionTypes.RemoveRole;

    constructor(public payload: {roleId: number}) {
    }
}

export class RemoveRoleSuccess implements Action {
    readonly type = RoleActionTypes.RemoveRoleSuccess;

    constructor(public payload: {roleId: number}) {
    }
}

export class RemoveRoleFail implements Action {
    readonly type = RoleActionTypes.RemoveRoleFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class SelectRole implements Action {
    readonly type = RoleActionTypes.SelectRole;

    constructor(public payload: {roleId: number}) {
    }
}

export class LoadRoles implements Action {
    readonly type = RoleActionTypes.LoadRoles;
}

export class LoadRolesSuccess implements Action {
    readonly type = RoleActionTypes.LoadRolesSuccess;

    constructor(public payload: Role[]) {
    }
}

export class LoadRolesFail implements Action {
    readonly type = RoleActionTypes.LoadRolesFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class AssignPermission implements Action {
    readonly type = RoleActionTypes.AssignPermission;

    constructor(public payload: {roleId: number, permissionId: number}) {
    }
}

export class AssignPermissionSuccess implements Action {
    readonly type = RoleActionTypes.AssignPermissionSuccess;

    constructor(public payload: {roleId: number, permissionId: number}) {
    }
}

export class AssignPermissionFail implements Action {
    readonly type = RoleActionTypes.AssignPermissionFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UnassignPermission implements Action {
    readonly type = RoleActionTypes.UnassignPermission;

    constructor(public payload: {roleId: number, permissionId: number}) {
    }
}

export class UnassignPermissionSuccess implements Action {
    readonly type = RoleActionTypes.UnassignPermissionSuccess;

    constructor(public payload: {roleId: number, permissionId: number}) {
    }
}

export class UnassignPermissionFail implements Action {
    readonly type = RoleActionTypes.UnassignPermissionFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export type RoleActions =
    AddRole
    | AddRoleSuccess
    | AddRoleFail
    | UpdateRole
    | UpdateRoleSuccess
    | UpdateRoleFail
    | RemoveRole
    | RemoveRoleSuccess
    | RemoveRoleFail
    | SelectRole
    | LoadRoles
    | LoadRolesSuccess
    | LoadRolesFail
    | AssignPermission
    | AssignPermissionSuccess
    | AssignPermissionFail
    | UnassignPermission
    | UnassignPermissionFail
    | UnassignPermissionSuccess;
