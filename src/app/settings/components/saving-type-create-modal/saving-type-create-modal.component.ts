import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CreateSavingType } from '../../models/requests/createSavingType.model';

const fg = dataItem => new FormGroup({
  'userId': new FormControl(dataItem.userId),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'symbol': new FormControl(dataItem.symbol, [Validators.required, Validators.maxLength(20)]),
});

@Component({
  selector: 'app-saving-type-create-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './saving-type-create-modal.component.html',
  styleUrls: ['./saving-type-create-modal.component.scss']
})
export class SavingTypeCreateModalComponent implements OnInit {

  @Input() userId: number;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<CreateSavingType>();

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
