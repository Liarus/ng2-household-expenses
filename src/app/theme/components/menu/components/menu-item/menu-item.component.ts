import { Component, OnInit, Input } from '@angular/core';

import { MenuItem } from './model/menuItem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() {
  }

  ngOnInit() {
  }
}
