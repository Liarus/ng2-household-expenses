import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { ExpenseType } from '../../models/ExpenseType.model';

@Component({
  selector: 'app-expense-type-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './expense-type-list.component.html',
  styleUrls: ['./expense-type-list.component.scss']
})
export class ExpenseTypeListComponent implements OnInit {

  @Input() types: ExpenseType[];
  @Input() isLoading: boolean;
  @Input() cols: any[];
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }
}
