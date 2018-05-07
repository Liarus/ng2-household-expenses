import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuDefinition: any;
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
