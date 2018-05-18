import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { SavingType } from './../../models/savingType.model';

@Component({
  selector: 'app-saving-type-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './saving-type-list.component.html',
  styleUrls: ['./saving-type-list.component.scss']
})
export class SavingTypeListComponent implements OnInit {

  @Input() types: SavingType[];
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
