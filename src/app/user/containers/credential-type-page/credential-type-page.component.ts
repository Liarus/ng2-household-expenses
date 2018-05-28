import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-credential-type-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./credential-type-page.component.scss'],
  template: `
    <p>app-credential-type-page</p>
  `
})
export class CredentialTypePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
