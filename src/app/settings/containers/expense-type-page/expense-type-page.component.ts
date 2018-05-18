import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { ExpenseType } from '../../models/ExpenseType.model';
import * as fromSettings from '../../reducers';
import * as expenseType from '../../actions/expenseType';
import * as fromPages from '../../../reducers';
import * as pages from '../../../core/actions/pages';
import { State } from '../../../reducers';
import { ExpenseTypeModalNames } from '../../definitions/expenseTypeModalNames.const';
import { DeleteExpenseType } from './../../models/requests/deleteExpenseType.model';
import { ModifyExpenseType } from './../../models/requests/modifyExpenseType.model';
import { CreateExpenseType } from './../../models/requests/createExpenseType.model';

@Component({
  selector: 'app-expense-type-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./expense-type-page.component.scss'],
  template: `
    <app-expense-type-list [types]="types|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
      (add)=addType($event)
      (edit)=updateType($event)
      (delete)=deleteType($event)
    ></app-expense-type-list>
    <app-expense-type-create-modal *ngIf="(openedModalName|async)==='EXPENSETYPE_ADD_DIALOG'"
      [userId]="1"
      (cancel)="hideAddModal($event)"
      (ok)="createType($event)"
    ></app-expense-type-create-modal>
    <app-expense-type-update-modal *ngIf="(openedModalName|async)==='EXPENSETYPE_UPDATE_DIALOG'"
      [type]="selectedType|async"
      (cancel)="hideUpdateModal($event)"
      (ok)="modifyType($event)"
    ></app-expense-type-update-modal>
  `
})
export class ExpenseTypePageComponent implements OnInit {

  types: Observable<ExpenseType[]>;
  selectedType: Observable<ExpenseType>;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'symbol', header: 'Symbol', className: '' }
    ];
    this.types = store.pipe(select(fromSettings.getAllExpenseTypes));
    this.isLoading = store.pipe(select(fromSettings.getExpenseTypesLoading));
    this.openedModalName = store.pipe(select(fromPages.getOpenedModalName));
    this.selectedType = store.pipe(select(fromSettings.getSelectedExpenseType));
  }

  ngOnInit() {
    this.store.dispatch(new expenseType.LoadExpenseTypes(1));
  }

  createType(command: CreateExpenseType) {
    this.hideAddModal();
    this.store.dispatch(new expenseType.AddExpenseType(command));
  }

  modifyType(command: ModifyExpenseType) {
    this.hideUpdateModal();
    this.store.dispatch(new expenseType.UpdateExpenseType(command));
  }

  deleteType(command: DeleteExpenseType) {
    this.store.dispatch(new expenseType.RemoveExpenseType(command));
  }

  addType() {
    this.openModal(ExpenseTypeModalNames.ADD_EXPENSETYPE_DIALOG);
  }

  updateType(id: number) {
    this.store.dispatch(new expenseType.SelectExpenseType(id));
    this.openModal(ExpenseTypeModalNames.UPDATE_EXPENSETYPE_DIALOG);
  }

  hideAddModal() {
    this.closeModal(ExpenseTypeModalNames.ADD_EXPENSETYPE_DIALOG);
  }

  hideUpdateModal() {
    this.closeModal(ExpenseTypeModalNames.UPDATE_EXPENSETYPE_DIALOG);
  }

  private openModal(name: string) {
    this.store.dispatch(new pages.OpenModal(name));
  }

  private closeModal(name: string) {
    this.store.dispatch(new pages.CloseModal(name));
  }
}
