import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user-page.component.scss'],
  template: `
    <p-tabView>
      <p-tabPanel header="Credential Types">
        <app-credential-type-page></app-credential-type-page>
      </p-tabPanel>
      <p-tabPanel header="Permissions">
        <app-permission-page></app-permission-page>
      </p-tabPanel>
      <p-tabPanel header="User Roles">
        Content 3
      </p-tabPanel>
      <p-tabPanel header="Users">
        Content 4
      </p-tabPanel>
    </p-tabView>
  `
})
export class UserPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }
}
