import { Component, OnInit, Input } from '@angular/core';

import { SavingType } from './../../models/savingType.model';

@Component({
  selector: 'app-saving-type-list',
  templateUrl: './saving-type-list.component.html',
  styleUrls: ['./saving-type-list.component.scss']
})
export class SavingTypeListComponent implements OnInit {

  @Input() types: SavingType[];
  @Input() isLoading: boolean;
  @Input() cols: any[];

  constructor() {
  }

  ngOnInit() {
  }
}
