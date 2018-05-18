import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { SavingType } from './../../models/savingType.model';
import { ModifySavingType } from './../../models/requests/modifySavingType.model';

const fg = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'symbol': new FormControl(dataItem.symbol, [Validators.maxLength(20)]),
  'version': new FormControl(dataItem.version)
});

@Component({
  selector: 'app-saving-type-update-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './saving-type-update-modal.component.html',
  styleUrls: ['./saving-type-update-modal.component.scss']
})
export class SavingTypeUpdateModalComponent implements OnInit {

  @Input() type: SavingType;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<ModifySavingType>();

  formGroup: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.formGroup = fg(this.type);
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
