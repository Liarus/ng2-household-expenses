import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isSidebarExpanded: Boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  sidebarExpanded(event: Boolean): void {
    this.isSidebarExpanded = event;
  }
}
