import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import * as fromUser from '../../reducers';
import * as credentialType from '../../actions/credentialType';
import * as fromCore from '../../../core/state/reducers';
import { State } from '../../../reducers';
import { CredentialType } from '../../models/credentialType.model';

@Component({
  selector: 'app-credential-type-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./credential-type-page.component.scss'],
  template: `
    <app-credential-type-list [types]="types|async"
      [cols]="cols"
      [isLoading]="isLoading|async"
    ></app-credential-type-list>
  `
})
export class CredentialTypePageComponent implements OnInit {

  types: Observable<CredentialType[]>;
  selectedType: Observable<CredentialType>;
  isLoading: Observable<boolean>;
  openedModalName: Observable<string>;
  cols: any[];

  constructor(private store: Store<State>) {
    this.cols = [
      { field: 'name', header: 'Name', className: '' },
      { field: 'code', header: 'Code', className: '' }
    ];
    this.types = store.pipe(select(fromUser.getAllCredentialTypes));
    this.isLoading = store.pipe(select(fromUser.getCredentialTypesLoading));
    this.openedModalName = store.pipe(select(fromCore.getOpenedModalName));
    this.selectedType = store.pipe(select(fromUser.getSelectedCredentialType));
  }

  ngOnInit() {
    this.store.dispatch(new credentialType.LoadCredentialTypes());
  }

}
