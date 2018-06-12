import { Permission } from './../../models/permission.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { RoleWithPermissions } from '../../models/roleWithPermissions.model';
import * as fromUser from '../../reducers';
import * as role from '../../actions/role';
import * as fromCore from '../../../core/reducers';
import * as pages from '../../../core/actions/pages';
import { State } from '../../../reducers';

@Component({
  selector: 'app-role-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./role-page.component.scss'],
  template: `
  <app-role-list [roles]="roles|async"
    [cols]="cols"
    [isLoading]="isLoading|async"
  ></app-role-list>
  `
})
export class RolePageComponent implements OnInit {

  roles: Observable<RoleWithPermissions[]>;
  selectedRole: Observable<RoleWithPermissions>;
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
  }

  ngOnInit() {
    this.store.dispatch(new role.LoadRoles());
  }
}
