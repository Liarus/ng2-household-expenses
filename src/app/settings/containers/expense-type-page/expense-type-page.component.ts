import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { ExpenseType } from '../../models/ExpenseType.model';
import * as fromSettings from '../../reducers';
import * as expenseType from '../../actions/expenseType';
import * as fromPages from '../../../reducers';
import * as pages from '../../../core/actions/pages';
import { State } from '../../../reducers';

@Component({
  selector: 'app-expense-type-page',
  styleUrls: ['./expense-type-page.component.scss'],
  template: `
    <app-expense-type-list [types]="types|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
    ></app-expense-type-list>
  `
})
export class ExpenseTypePageComponent implements OnInit {

  types: Observable<ExpenseType[]>;
  isLoading: Observable<boolean>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'symbol', header: 'Symbol', className: '' }
    ];
    this.types = store.pipe(select(fromSettings.getAllExpenseTypes));
    this.isLoading = store.pipe(select(fromSettings.getExpenseTypesLoading));
  }

  ngOnInit() {
    this.store.dispatch(new expenseType.LoadExpenseTypes(1));
  }
}
