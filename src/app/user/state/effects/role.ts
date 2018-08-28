import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import {
    RoleActionTypes,
    AddRole,
    AddRoleFail,
    AddRoleSuccess,
    UpdateRole,
    UpdateRoleFail,
    UpdateRoleSuccess,
    LoadRoles,
    LoadRolesSuccess,
    LoadRolesFail,
    RemoveRole,
    RemoveRoleSuccess,
    RemoveRoleFail,
    AssignPermission,
    AssignPermissionSuccess,
    AssignPermissionFail,
    UnassignPermission,
    UnassignPermissionSuccess,
    UnassignPermissionFail,
} from '../actions/role';
import { Role } from './../../models/role.model';
import { ModifyRole } from './../../models/requests/modifyRole.model';
import { RoleService } from './../../services/role.service';
import { CreateRole } from './../../models/requests/createRole.model';

@Injectable()
export class RoleEffects {

    @Effect()
    addRole = this.actions.pipe(
        ofType(RoleActionTypes.AddRole),
        map((action: AddRole) => action.payload),
        switchMap((request: CreateRole) =>
            this.roleService.create(request)
            .pipe(
                map(response => new AddRoleSuccess(
                    {
                        id: response,
                        name: request.name,
                        code: request.code,
                        permissionIds: request.permissionIds,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddRoleFail(error)))
            )
        )
    );

    @Effect()
    updateRole = this.actions.pipe(
        ofType(RoleActionTypes.UpdateRole),
        map((action: UpdateRole) => action.payload),
        switchMap((request: ModifyRole) =>
            this.roleService.update(request)
            .pipe(
                map(response => new UpdateRoleSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        code: request.code,
                        permissionIds: request.permissionIds,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdateRoleFail(error)))
            )
        )
    );

    @Effect()
    deleteRole = this.actions.pipe(
        ofType(RoleActionTypes.RemoveRole),
        map((action: RemoveRole) => action.payload),
        switchMap((request: number) =>
            this.roleService.delete(request)
            .pipe(
                map(response => new RemoveRoleSuccess(request)),
                catchError(error => of(new RemoveRoleFail(error)))
            )
        )
    );

    @Effect()
    loadRoles = this.actions.pipe(
        ofType(RoleActionTypes.LoadRoles),
        switchMap((action: LoadRoles) =>
            this.roleService.getAll()
            .pipe(
                map((response: Role[]) => new LoadRolesSuccess(response)),
                catchError(error => of(new LoadRolesFail(error)))
            )
        )
    );

    @Effect()
    assignPermission = this.actions.pipe(
        ofType(RoleActionTypes.AssignPermission),
        switchMap((action: AssignPermission) =>
            this.roleService.assignPermission(action.payload.roleId, action.payload.permissionId)
            .pipe(
                map(response => new AssignPermissionSuccess(action.payload)),
                catchError(error => of(new AssignPermissionFail(error)))
            )
        )
    );

    @Effect()
    unassignPermission = this.actions.pipe(
        ofType(RoleActionTypes.UnassignPermission),
        switchMap((action: UnassignPermission) =>
            this.roleService.unassignPermission(action.payload.roleId, action.payload.permissionId)
            .pipe(
                map(response => new UnassignPermissionSuccess(action.payload)),
                catchError(error => of(new UnassignPermissionFail(error)))
            )
        )
    );

    constructor(private actions: Actions,
                private roleService: RoleService) {
    }
}
