import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

import {
    PermissionActionTypes,
    AddPermission,
    AddPermissionFail,
    AddPermissionSuccess,
    UpdatePermission,
    UpdatePermissionFail,
    UpdatePermissionSuccess,
    LoadPermissions,
    LoadPermissionsSuccess,
    LoadPermissionsFail,
    RemovePermission,
    RemovePermissionSuccess,
    RemovePermissionFail
} from '../actions/permission';
import { Permission } from './../models/permission.model';
import { ModifyPermission } from './../models/requests/modifyPermission.model';
import { PermissionService } from './../services/permission.service';
import { CreatePermission } from './../models/requests/createPermission.model';

@Injectable()
export class PermissionEffects {

    @Effect()
    addHousehold = this.actions.pipe(
        ofType(PermissionActionTypes.AddPermission),
        map((action: AddPermission) => action.payload),
        switchMap((request: CreatePermission) =>
            this.permissionService.create(request)
            .pipe(
                map(response => new AddPermissionSuccess(
                    {
                        id: response,
                        name: request.name,
                        code: request.code,
                        version: 1,
                    })
                ),
                catchError(error => of(new AddPermissionFail(error)))
            )
        )
    );

    @Effect()
    updateHousehold = this.actions.pipe(
        ofType(PermissionActionTypes.UpdatePermission),
        map((action: UpdatePermission) => action.payload),
        switchMap((request: ModifyPermission) =>
            this.permissionService.update(request)
            .pipe(
                map(response => new UpdatePermissionSuccess(
                    {
                        id: request.id,
                        name: request.name,
                        code: request.code,
                        version: request.version + 1,
                    })
                ),
                catchError(error => of(new UpdatePermissionFail(error)))
            )
        )
    );

    @Effect()
    deleteHousehold = this.actions.pipe(
        ofType(PermissionActionTypes.RemovePermission),
        map((action: RemovePermission) => action.payload),
        switchMap((request: number) =>
            this.permissionService.delete(request)
            .pipe(
                map(response => new RemovePermissionSuccess(request)),
                catchError(error => of(new RemovePermissionFail(error)))
            )
        )
    );

    @Effect()
    loadHouseholds = this.actions.pipe(
        ofType(PermissionActionTypes.LoadPermissions),
        switchMap((action: LoadPermissions) =>
            this.permissionService.getAll()
            .pipe(
                map((response: Permission[]) => new LoadPermissionsSuccess(response)),
                catchError(error => of(new LoadPermissionsFail(error)))
            )
        )
    );

    constructor(private actions: Actions,
                private permissionService: PermissionService) {
    }
}
