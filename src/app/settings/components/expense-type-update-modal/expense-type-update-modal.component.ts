import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ExpenseType } from '../../models/expenseType.model';
import { ModifyExpenseType } from './../../models/requests/modifyExpenseType.model';

const fg = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'symbol': new FormControl(dataItem.symbol, [Validators.maxLength(20)]),
  'version': new FormControl(dataItem.version)
});

@Component({
  selector: 'app-expense-type-update-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-type-update-modal.component.html',
  styleUrls: ['./expense-type-update-modal.component.scss']
})
export class ExpenseTypeUpdateModalComponent implements OnInit {

  @Input() type: ExpenseType;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<ModifyExpenseType>();

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
