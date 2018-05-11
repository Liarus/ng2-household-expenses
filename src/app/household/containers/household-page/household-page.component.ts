import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHouseholds from '../../reducers';
import * as household from '../../actions/household';
import { Household } from '../../models/household.model';

@Component({
  selector: 'app-household-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./household-page.component.scss'],
  template: `
    <app-household-list [households]="households|async" [cols]="cols"
    ></app-household-list>
  `,
})
export class HouseholdPageComponent implements OnInit {

  households: Observable<Household[]>;
  isLoading: Observable<boolean>;
  cols: any[];

  constructor(private store: Store<fromHouseholds.State>) {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'symbol', header: 'Symbol' },
      { field: 'description', header: 'Description' },
      { field: 'street', header: 'Street' },
      { field: 'city', header: 'City' },
      { field: 'country', header: 'Country' },
      { field: 'zip', header: 'Zip' }
    ];
    this.households = store.pipe(select(fromHouseholds.getAllHouseholds));
    this.isLoading = store.pipe(select(fromHouseholds.getHouseholdsLoading));
  }

  ngOnInit() {
    this.store.dispatch(new household.LoadHouseholds(1));
  }
}
