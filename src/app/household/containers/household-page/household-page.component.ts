import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHouseholds from '../../reducers';
import * as household from '../../actions/household';
import { Household } from '../../models/household.model';

@Component({
  selector: 'app-household-page',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './household-page.component.html',
  styleUrls: ['./household-page.component.scss']
})
export class HouseholdPageComponent implements OnInit {

  households: Observable<Household[]>;

  constructor(private store: Store<fromHouseholds.State>) {
    this.households = store.pipe(select(fromHouseholds.getAllHouseholds));
  }

  ngOnInit() {
    this.store.dispatch(new household.LoadHouseholds(1));
  }
}
