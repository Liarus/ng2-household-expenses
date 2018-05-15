import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Household } from './../../models/household.model';
import { ModifyHousehold } from './../../models/requests/modifyHousehold.model';

const fg = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'symbol': new FormControl(dataItem.symbol, [Validators.maxLength(255)]),
  'description': new FormControl(dataItem.description, [Validators.maxLength(255)]),
  'street': new FormControl(dataItem.street, [Validators.required, Validators.maxLength(255)]),
  'city': new FormControl(dataItem.city, [Validators.required, Validators.maxLength(255)]),
  'country': new FormControl(dataItem.country, [Validators.required, Validators.maxLength(255)]),
  'zipCode': new FormControl(dataItem.zipCode, [Validators.required, Validators.maxLength(255)]),
  'version': new FormControl(dataItem.version, [Validators.required, Validators.maxLength(255)])
});

@Component({
  selector: 'app-household-update-modal',
  templateUrl: './household-update-modal.component.html',
  styleUrls: ['./household-update-modal.component.scss']
})
export class HouseholdUpdateModalComponent implements OnInit {

  @Input() household: Household;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<ModifyHousehold>();

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = fg(this.household);
  }

  save() {
    if (!this.formGroup.dirty) {
      this.cancel.emit();
      return;
    }
    if (this.formGroup.valid) {
      const dataItem = this.formGroup.value;
      this.ok.emit(dataItem);
    }
  }
}
