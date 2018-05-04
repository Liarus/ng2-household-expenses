import { Component, OnInit } from '@angular/core';

import { MENU } from '../../models/menu.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  readonly PAGES_MENU = MENU;
  isSidebarExpanded: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  sidebarExpanded(event: Boolean): void {
    this.isSidebarExpanded = event;
  }
}
