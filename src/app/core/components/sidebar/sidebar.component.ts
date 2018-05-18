import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  @Input() isSidebarExpanded: boolean;
  @Output() expandSidebar = new EventEmitter();
  @Output() collapseSidebar = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
  }

  expandCollapse() {
    if (this.isSidebarExpanded) {
      this.collapseSidebar.emit();
    } else {
      this.expandSidebar.emit();
    }
  }
}
