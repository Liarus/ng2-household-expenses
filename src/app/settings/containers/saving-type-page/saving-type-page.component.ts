import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromSettings from '../../reducers';
import * as savingType from '../../actions/savingType';
import * as fromPages from '../../../reducers';
import * as pages from '../../../core/actions/pages';
import { SavingType } from './../../models/savingType.model';
import { State } from '../../../reducers';

@Component({
  selector: 'app-saving-type-page',
  template: `
    <app-saving-type-list [types]="types|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
    ></app-saving-type-list>
  `
})
export class SavingTypePageComponent implements OnInit {

  types: Observable<SavingType[]>;
  isLoading: Observable<boolean>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'symbol', header: 'Symbol', className: '' }
    ];
    this.types = store.pipe(select(fromSettings.getAllSavingTypes));
    this.isLoading = store.pipe(select(fromSettings.getSavingTypesLoading));
  }

  ngOnInit() {
    this.store.dispatch(new savingType.LoadSavingTypes(1));
  }
}
