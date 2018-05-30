import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromUser from '../../reducers';
import * as status from '../../actions/status';
import { State } from '../../../reducers';

@Component({
  selector: 'app-user-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-page.component.scss'],
  template: `
    <p-tabView [activeIndex]="activeTabIndex|async"
      (onChange)="selectActiveTab($event)"
    >
      <p-tabPanel header="Credential Types">
        <app-credential-type-page></app-credential-type-page>
      </p-tabPanel>
      <p-tabPanel header="Permissions">
        <app-permission-page></app-permission-page>
      </p-tabPanel>
      <p-tabPanel header="User Roles">
        Content 3
      </p-tabPanel>
      <p-tabPanel header="Users">
        Content 4
      </p-tabPanel>
    </p-tabView>
  `
})
export class UserPageComponent implements OnInit {

  activeTabIndex: Observable<number>;

  constructor(private store: Store<fromUser.State>) {
    this.activeTabIndex = store.pipe(select(fromUser.getActiveTabIndex));
    this.activeTabIndex.subscribe(e => console.log(e));
  }

  ngOnInit() {
  }

  selectActiveTab(event: any) {
    this.store.dispatch(new status.SelectActiveTabIndex(event.index));
  }
}
