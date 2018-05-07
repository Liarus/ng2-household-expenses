import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];


  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
