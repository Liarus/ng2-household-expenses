import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHouseholds from '../../reducers';
import * as household from '../../actions/household';
import { Household } from '../../models/household.model';
import { CreateHousehold } from '../../models/requests/createHousehold.model';
import { ModifyHousehold } from './../../models/requests/modifyHousehold.model';

@Component({
  selector: 'app-household-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./household-page.component.scss'],
  template: `
    <app-household-list [households]="households|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
      (add)=addHousehold($event)
    ></app-household-list>
    <app-household-create-modal *ngIf="isAddDialogVisible|async"
      [userId]="1"
      (cancel)="hideAddDialog($event)"
      (ok)="createHousehold($event)"
    ></app-household-create-modal>
  `,
})
export class HouseholdPageComponent implements OnInit {

  households: Observable<Household[]>;
  isLoading: Observable<boolean>;
  isAddDialogVisible: Observable<boolean>;
  cols: any[];

  constructor(private store: Store<fromHouseholds.State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'symbol', header: 'Symbol', className: '' },
      { field: 'description', header: 'Description', className: 'ui-p-4' },
      { field: 'street', header: 'Street', className: 'ui-p-5' },
      { field: 'city', header: 'City', className: 'ui-p-5' },
      { field: 'country', header: 'Country', className: 'ui-p-6' },
      { field: 'zip', header: 'Zip', className: 'ui-p-6' }
    ];
    this.households = store.pipe(select(fromHouseholds.getAllHouseholds));
    this.isLoading = store.pipe(select(fromHouseholds.getHouseholdsLoading));
    this.isAddDialogVisible = store.pipe(select(fromHouseholds.getHouseholdsShowAddDialog));
  }

  ngOnInit() {
    this.store.dispatch(new household.LoadHouseholds(1));
  }

  createHousehold(command: CreateHousehold) {
    this.showAddDialog(false);
    this.store.dispatch(new household.AddHousehold(command));
  }

  updateHousehold(command: ModifyHousehold) {
    this.showAddDialog(false);
    this.store.dispatch(new household.UpdateHousehold(command));
  }

  addHousehold() {
    this.showAddDialog(true);
  }

  hideAddDialog() {
    this.showAddDialog(false);
  }

  private showAddDialog(show: boolean) {
    this.store.dispatch(new household.ShowAddHouseholdDialog(show));
  }
}
