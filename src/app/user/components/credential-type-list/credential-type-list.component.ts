import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { CredentialType } from './../../models/credentialType.model';

@Component({
  selector: 'app-credential-type-list',
  templateUrl: './credential-type-list.component.html',
  styleUrls: ['./credential-type-list.component.scss']
})
export class CredentialTypeListComponent implements OnInit {

  @Input() types: CredentialType[];
  @Input() isLoading: boolean;
  @Input() cols: any[];
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

}
