import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromSettings from '../../reducers';
import * as savingType from '../../actions/savingType';
import * as fromCore from '../../../core/state/reducers';
import * as pages from '../../../core/state/actions/pages';
import { SavingType } from './../../models/savingType.model';
import { State } from '../../../reducers';
import { CreateSavingType } from '../../models/requests/createSavingType.model';
import { SavingTypeModalNames } from '../../definitions/savingTypeModalNames.const';
import { DeleteSavingType } from './../../models/requests/deleteSavingType.model';
import { ModifySavingType } from './../../models/requests/modifySavingType.model';

@Component({
  selector: 'app-saving-type-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-saving-type-list [types]="types|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
      (add)=addType()
      (edit)=updateType($event)
      (delete)=deleteType($event)
    ></app-saving-type-list>
    <app-saving-type-create-modal *ngIf="(openedModalName|async)==='SAVINGTYPE_ADD_DIALOG'"
      [userId]="1"
      (cancel)="hideAddModal($event)"
      (ok)="createType($event)"
    ></app-saving-type-create-modal>
    <app-saving-type-update-modal *ngIf="(openedModalName|async)==='SAVINGTYPE_UPDATE_DIALOG'"
      [type]="selectedType|async"
      (cancel)="hideUpdateModal($event)"
      (ok)="modifyType($event)"
    ></app-saving-type-update-modal>
  `
})
export class SavingTypePageComponent implements OnInit {

  types: Observable<SavingType[]>;
  selectedType: Observable<SavingType>;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'symbol', header: 'Symbol', className: '' }
    ];
    this.types = store.pipe(select(fromSettings.getAllSavingTypes));
    this.isLoading = store.pipe(select(fromSettings.getSavingTypesLoading));
    this.openedModalName = store.pipe(select(fromCore.getOpenedModalName));
    this.selectedType = store.pipe(select(fromSettings.getSelectedSavingType));
  }

  ngOnInit() {
    this.store.dispatch(new savingType.LoadSavingTypes(1));
  }

  createType(command: CreateSavingType) {
    this.hideAddModal();
    this.store.dispatch(new savingType.AddSavingType(command));
  }

  modifyType(command: ModifySavingType) {
    this.hideUpdateModal();
    this.store.dispatch(new savingType.UpdateSavingType(command));
  }

  deleteType(command: DeleteSavingType) {
    this.store.dispatch(new savingType.RemoveSavingType(command));
  }

  addType() {
    this.openModal(SavingTypeModalNames.ADD_SAVINGTYPE_DIALOG);
  }

  updateType(id: number) {
    this.store.dispatch(new savingType.SelectSavingType(id));
    this.openModal(SavingTypeModalNames.UPDATE_SAVINGTYPE_DIALOG);
  }

  hideAddModal() {
    this.closeModal(SavingTypeModalNames.ADD_SAVINGTYPE_DIALOG);
  }

  hideUpdateModal() {
    this.closeModal(SavingTypeModalNames.UPDATE_SAVINGTYPE_DIALOG);
  }

  private openModal(name: string) {
    this.store.dispatch(new pages.OpenModal(name));
  }

  private closeModal(name: string) {
    this.store.dispatch(new pages.CloseModal(name));
  }
}
