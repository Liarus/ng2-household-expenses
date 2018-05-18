import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CreateExpenseType } from './../../models/requests/createExpenseType.model';

const fg = dataItem => new FormGroup({
  'userId': new FormControl(dataItem.userId),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'symbol': new FormControl(dataItem.symbol, [Validators.required, Validators.maxLength(20)]),
});

@Component({
  selector: 'app-expense-type-create-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-type-create-modal.component.html',
  styleUrls: ['./expense-type-create-modal.component.scss']
})
export class ExpenseTypeCreateModalComponent implements OnInit {

  @Input() userId: number;
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<CreateExpenseType>();

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
