import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-page.component.scss'],
  template: `
    <div class="ui-g">
      <div class="ui-g-12 ui-sm-12 ui-md-12 ui-lg-12">
        <app-credential-type-page></app-credential-type-page>
      </div>
    </div>
  `
})
export class UserPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
