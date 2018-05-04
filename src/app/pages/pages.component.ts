import { Component, OnInit } from '@angular/core';

import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  readonly PAGES_MENU = PAGES_MENU;
  isSidebarExpanded: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  sidebarExpanded(event: Boolean): void {
    this.isSidebarExpanded = event;
  }
}
