import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menuDefinition: any;
  @Output() sidebarExpanded = new EventEmitter<boolean>();

  private isSidebarExpanded = false;

  constructor() {
  }

  ngOnInit() {
  }

  expandCollapse() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    this.sidebarExpanded.emit(this.isSidebarExpanded);
  }
}
