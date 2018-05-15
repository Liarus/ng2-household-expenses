import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CreateHousehold } from './../../models/requests/createHousehold.model';


const fg = dataItem => new FormGroup({
    'userId': new FormControl(dataItem.userId),
    'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
    'symbol': new FormControl(dataItem.symbol, [Validators.maxLength(255)]),
    'description': new FormControl(dataItem.description, [Validators.maxLength(255)]),
    'street': new FormControl(dataItem.street, [Validators.required, Validators.maxLength(255)]),
    'city': new FormControl(dataItem.city, [Validators.required, Validators.maxLength(255)]),
    'country': new FormControl(dataItem.country, [Validators.required, Validators.maxLength(255)]),
    'zipCode': new FormControl(dataItem.zipCode, [Validators.required, Validators.maxLength(255)]),
});

@Component({
  selector: 'app-household-create-modal',
  templateUrl: './household-create-modal.component.html',
  styleUrls: ['./household-create-modal.component.scss']
})
export class HouseholdCreateModalComponent implements OnInit {

  @Input() userId: number;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<CreateHousehold>();

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = fg({'userId': this.userId});
  }

  save() {
    if (this.formGroup.valid) {
      const dataItem = this.formGroup.value;
      this.ok.emit(dataItem);
    }
  }
}
