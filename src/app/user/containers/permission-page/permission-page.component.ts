import { Permission } from './../../models/permission.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as fromUser from '../../reducers';
import * as permission from '../../actions/permission';
import * as fromCore from '../../../core/reducers';
import * as pages from '../../../core/actions/pages';
import { State } from '../../../reducers';

@Component({
  selector: 'app-permission-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./permission-page.component.scss'],
  template: `
    <app-permission-list [permissions]="permissions|async"
    [cols]="cols"
    [isLoading]="isLoading|async"
    ></app-permission-list>
  `
})
export class PermissionPageComponent implements OnInit {

  permissions: Observable<Permission[]>;
  selectedPermission: Observable<Permission>;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'code', header: 'Code', className: '' }
    ];
    this.permissions = store.pipe(select(fromUser.getAllPermissions));
    this.isLoading = store.pipe(select(fromUser.getPermissionsLoading));
    this.openedModalName = store.pipe(select(fromCore.getOpenedModalName));
    this.selectedPermission = store.pipe(select(fromUser.getSelectedPermission));
  }

  ngOnInit() {
    this.store.dispatch(new permission.LoadPermissions());
  }
}
