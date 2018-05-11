import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Household } from '../../models/household.model';

@Component({
  selector: 'app-household-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './household-list.component.html',
  styleUrls: ['./household-list.component.scss']
})
export class HouseholdListComponent implements OnInit {

  @Input() households: Household[];
  @Input() isLoading: boolean;
  @Input() cols: any[];

  constructor() {
  }

  ngOnInit() {
  }
}
