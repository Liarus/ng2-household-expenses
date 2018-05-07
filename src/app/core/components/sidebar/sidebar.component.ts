import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  @Output() sidebarExpanded = new EventEmitter();
  @Output() sidebarCollapsed = new EventEmitter();

  private isSidebarExpanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  expandCollapse() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    if (this.isSidebarExpanded) {
      this.sidebarExpanded.emit();
    } else {
      this.sidebarCollapsed.emit();
    }
  }
}
