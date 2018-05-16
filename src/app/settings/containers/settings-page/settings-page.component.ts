import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  styleUrls: ['./settings-page.component.scss'],
  template: `
    <app-expense-type-page></app-expense-type-page>
    <app-saving-type-page></app-saving-type-page>
  `
})
export class SettingsPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
