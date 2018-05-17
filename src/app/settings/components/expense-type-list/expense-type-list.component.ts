import { Component, OnInit, Input } from '@angular/core';

import { ExpenseType } from '../../models/ExpenseType.model';

@Component({
  selector: 'app-expense-type-list',
  templateUrl: './expense-type-list.component.html',
  styleUrls: ['./expense-type-list.component.scss']
})
export class ExpenseTypeListComponent implements OnInit {

  @Input() types: ExpenseType[];
  @Input() isLoading: boolean;
  @Input() cols: any[];

  constructor() {
  }

  ngOnInit() {
  }
}
