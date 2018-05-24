import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { MENU } from '../../models/menu.model';
import * as fromCore from '../../reducers';
import * as pages from '../../actions/pages';
import { MenuItem } from '../../models/menuItem.model';

@Component({
  selector: 'app-pages',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  readonly PAGES_MENU = MENU;
  isSidebarExpanded: Observable<Boolean>;
  menuItems: Observable<MenuItem[]>;

  constructor(private store: Store<fromCore.State>) {
    this.isSidebarExpanded = store.pipe(select(fromCore.getIsSidebarExpanded));
    this.menuItems = store.pipe(select(fromCore.getMenuItems));
  }

  ngOnInit() {
    this.store.dispatch(new pages.ApplyMenuDefinition(this.PAGES_MENU));
  }

  expandSidebar(): void {
    this.store.dispatch(new pages.ExpandSidebar());
  }

  collapseSidebar(): void {
    this.store.dispatch(new pages.CollapseSidebar());
  }
}
