import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() {
  }

  ngOnInit() {
  }
}
