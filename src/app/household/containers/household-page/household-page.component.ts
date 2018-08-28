import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromHouseholds from '../../reducers';
import * as household from '../../actions/household';
import * as fromCore from '../../../core/state/reducers';
import * as pages from '../../../core/state/actions/pages';
import { Household } from '../../models/household.model';
import { CreateHousehold } from '../../models/requests/createHousehold.model';
import { ModifyHousehold } from './../../models/requests/modifyHousehold.model';
import { State } from '../../../state/reducers';
import { HouseholdModalNames } from '../../definitions/householdModalNames.const';
import { DeleteHousehold } from '../../models/requests/deleteHousehold.model';

@Component({
  selector: 'app-household-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./household-page.component.scss'],
  template: `
    <div class="ui-g">
      <div class="ui-g-12">
        <app-household-list [households]="households|async"
          [cols]="cols"
          [isLoading]="isLoading|async"
          (add)=addHousehold()
          (edit)=updateHousehold($event)
          (delete)=deleteHousehold($event)
        ></app-household-list>
        <app-household-create-modal *ngIf="(openedModalName|async)==='HOUSEHOLD_ADD_DIALOG'"
          [userId]="1"
          (cancel)="hideAddModal($event)"
          (ok)="createHousehold($event)"
        ></app-household-create-modal>
        <app-household-update-modal *ngIf="(openedModalName|async)==='HOUSEHOLD_UPDATE_DIALOG'"
          [household]="selectedHousehold|async"
          (cancel)="hideUpdateModal($event)"
          (ok)="modifyHousehold($event)"
        ></app-household-update-modal>
      </div>
    </div>
  `,
})
export class HouseholdPageComponent implements OnInit {

  households: Observable<Household[]>;
  selectedHousehold: Observable<Household>;
  household: Household;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
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
    this.openedModalName = store.pipe(select(fromCore.getOpenedModalName));
    this.selectedHousehold = store.pipe(select(fromHouseholds.getSelectedHousehold));
  }

  ngOnInit() {
    this.store.dispatch(new household.LoadHouseholds(1));
  }

  createHousehold(command: CreateHousehold) {
    this.hideAddModal();
    this.store.dispatch(new household.AddHousehold(command));
  }

  modifyHousehold(command: ModifyHousehold) {
    this.hideUpdateModal();
    this.store.dispatch(new household.UpdateHousehold(command));
  }

  deleteHousehold(command: DeleteHousehold) {
    this.store.dispatch(new household.RemoveHousehold(command));
  }

  addHousehold() {
    this.openModal(HouseholdModalNames.ADD_HOUSEHOLD_DIALOG);
  }

  updateHousehold(id: number) {
    this.store.dispatch(new household.SelectHousehold(id));
    this.openModal(HouseholdModalNames.UPDATE_HOUSEHOLD_DIALOG);
  }

  hideAddModal() {
    this.closeModal(HouseholdModalNames.ADD_HOUSEHOLD_DIALOG);
  }

  hideUpdateModal() {
    this.closeModal(HouseholdModalNames.UPDATE_HOUSEHOLD_DIALOG);
  }

  private openModal(name: string) {
    this.store.dispatch(new pages.OpenModal(name));
  }

  private closeModal(name: string) {
    this.store.dispatch(new pages.CloseModal(name));
  }
}
