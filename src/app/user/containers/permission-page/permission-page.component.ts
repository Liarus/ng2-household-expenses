import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { Permission } from './../../models/permission.model';
import * as fromUser from '../../state/reducers';
import * as permission from '../../state/actions/permission';
import * as fromCore from '../../../core/state/reducers';
import { State } from '../../../state/reducers';

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
