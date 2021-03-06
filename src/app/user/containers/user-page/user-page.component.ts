import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromUser from '../../state/reducers';
import * as status from '../../state/actions/status';

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
        <app-role-page></app-role-page>
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
  }

  ngOnInit() {
  }

  selectActiveTab(event: any) {
    this.store.dispatch(new status.SelectActiveTabIndex(event.index));
  }
}
