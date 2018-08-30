import { Action } from '@ngrx/store';

import { CreatePermission } from '../../models/requests/createPermission.model';
import { Permission } from '../../models/permission.model';
import { ModifyPermission } from '../../models/requests/modifyPermission.model';

export enum PermissionActionTypes {
    AddPermission = '[Permission] Add Permission',
    AddPermissionSuccess = '[Permission API] Add Permission Success',
    AddPermissionFail = '[Permission API] Add Permission Fail',
    UpdatePermission = '[Permission] Update Permission',
    UpdatePermissionSuccess = '[Permission API] Update Permission Success',
    UpdatePermissionFail = '[Permission API] Update Permission Fail',
    RemovePermission = '[Permission] Remove Permission',
    RemovePermissionSuccess = '[Permission API] Remove Permission Success',
    RemovePermissionFail = '[Permission API] Remove Permission Fail',
    SelectPermission = '[Permission] Select Permission',
    LoadPermissions = '[Permission] Load Permission',
    LoadPermissionsSuccess = '[Permission API] Load Permission Success',
    LoadPermissionsFail = '[Permission API] Load Permission Fail'
}

export class AddPermission implements Action {
    readonly type = PermissionActionTypes.AddPermission;

    constructor(public payload: CreatePermission) {
    }
}

export class AddPermissionSuccess implements Action {
    readonly type = PermissionActionTypes.AddPermissionSuccess;

    constructor(public payload: Permission) {
    }
}

export class AddPermissionFail implements Action {
    readonly type = PermissionActionTypes.AddPermissionFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdatePermission implements Action {
    readonly type = PermissionActionTypes.UpdatePermission;

    constructor(public payload: ModifyPermission) {
    }
}

export class UpdatePermissionFail implements Action {
    readonly type = PermissionActionTypes.UpdatePermissionFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class UpdatePermissionSuccess implements Action {
    readonly type = PermissionActionTypes.UpdatePermissionSuccess;

    constructor(public payload: Partial<Permission>) {
    }
}

export class RemovePermission implements Action {
    readonly type = PermissionActionTypes.RemovePermission;

    constructor(public payload: {permissionId: number}) {
    }
}

export class RemovePermissionSuccess implements Action {
    readonly type = PermissionActionTypes.RemovePermissionSuccess;

    constructor(public payload: {permissionId: number}) {
    }
}

export class RemovePermissionFail implements Action {
    readonly type = PermissionActionTypes.RemovePermissionFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export class SelectPermission implements Action {
    readonly type = PermissionActionTypes.SelectPermission;

    constructor(public payload: {permissionId: number}) {
    }
}

export class LoadPermissions implements Action {
    readonly type = PermissionActionTypes.LoadPermissions;
}

export class LoadPermissionsSuccess implements Action {
    readonly type = PermissionActionTypes.LoadPermissionsSuccess;

    constructor(public payload: Permission[]) {
    }
}

export class LoadPermissionsFail implements Action {
    readonly type = PermissionActionTypes.LoadPermissionsFail;

    constructor(public payload: {errorMessage: string}) {
    }
}

export type PermissionActions =
    AddPermission
    | AddPermissionSuccess
    | AddPermissionFail
    | UpdatePermission
    | UpdatePermissionSuccess
    | UpdatePermissionFail
    | RemovePermission
    | RemovePermissionSuccess
    | RemovePermissionFail
    | SelectPermission
    | LoadPermissions
    | LoadPermissionsSuccess
    | LoadPermissionsFail;
