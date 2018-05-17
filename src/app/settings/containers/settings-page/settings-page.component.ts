import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  styleUrls: ['./settings-page.component.scss'],
  template: `
    <div class="ui-g">
      <div class="ui-g-12 ui-sm-12 ui-md-12 ui-lg-6">
        <app-expense-type-page></app-expense-type-page>
      </div>
      <div class="ui-g-12 ui-sm-12 ui-md-12 ui-lg-6">
        <app-saving-type-page></app-saving-type-page>
      </div>
    </div>
  `
})
export class SettingsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
