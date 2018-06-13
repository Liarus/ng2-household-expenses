import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { RoleWithPermissions } from '../../models/roleWithPermissions.model';
import * as fromUser from '../../reducers';
import * as role from '../../actions/role';
import * as fromCore from '../../../core/reducers';
import * as pages from '../../../core/actions/pages';
import { State } from '../../../reducers';
import { RoleModalNames } from '../../definitions/roleModalNames';
import { ModifyRole } from './../../models/requests/modifyRole.model';
import { CreateRole } from './../../models/requests/createRole.model';
import { Permission } from './../../models/permission.model';

@Component({
  selector: 'app-role-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./role-page.component.scss'],
  template: `
  <app-role-list [roles]="roles|async"
    [cols]="cols"
    [isLoading]="isLoading|async"
    (add)=addRole($event)
    (edit)=updateRole($event)
    (delete)=deleteRole($event)
  ></app-role-list>
  <app-role-create-modal *ngIf="(openedModalName|async)==='ROLE_ADD_DIALOG'"
    [permissions]="permissions|async"
    (cancel)="hideAddModal($event)"
    (ok)="createRole($event)"
  ></app-role-create-modal>
  `
})
export class RolePageComponent implements OnInit {

  roles: Observable<RoleWithPermissions[]>;
  selectedRole: Observable<RoleWithPermissions>;
  permissions: Observable<Permission[]>;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'code', header: 'Code', className: '' }
    ];
    this.roles = store.pipe(select(fromUser.getRolesWithPermissions));
    this.isLoading = store.pipe(select(fromUser.getPermissionsLoading));
    this.openedModalName = store.pipe(select(fromCore.getOpenedModalName));
    this.selectedRole = store.pipe(select(fromUser.getSelectedRoleWithPermissions));
    this.permissions = store.pipe(select(fromUser.getAllPermissions));
  }

  ngOnInit() {
    this.store.dispatch(new role.LoadRoles());
  }

  createRole(command: CreateRole) {
    this.hideAddModal();
    this.store.dispatch(new role.AddRole(command));
  }

  modifyRole(command: ModifyRole) {
    this.hideUpdateModal();
    this.store.dispatch(new role.UpdateRole(command));
  }

  deleteRole(roleId: number) {
    this.store.dispatch(new role.RemoveRole(roleId));
  }

  addRole() {
    this.openModal(RoleModalNames.ADD_ROLE_DIALOG);
  }

  updateRole(id: number) {
    this.store.dispatch(new role.SelectRole(id));
    this.openModal(RoleModalNames.UPDATE_ROLE_DIALOG);
  }

  hideAddModal() {
    this.closeModal(RoleModalNames.ADD_ROLE_DIALOG);
  }

  hideUpdateModal() {
    this.closeModal(RoleModalNames.UPDATE_ROLE_DIALOG);
  }

  private openModal(name: string) {
    this.store.dispatch(new pages.OpenModal(name));
  }

  private closeModal(name: string) {
    this.store.dispatch(new pages.CloseModal(name));
  }
}
