import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-page',
  styleUrls: ['./role-page.component.scss'],
  template: `
  <app-role-list></app-role-list>
`
})
export class RolePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
