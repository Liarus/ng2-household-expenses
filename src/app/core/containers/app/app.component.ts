import { Component, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from '../../state/reducers/index';
import * as pages from '../../state/actions/pages';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'app';

  constructor(private store: Store<fromCore.State>) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.store.dispatch(new pages.ResizeWndow(
      {
        width: event.target.innerWidth,
        height: event.target.innerHeight
      })
    );
  }
}
