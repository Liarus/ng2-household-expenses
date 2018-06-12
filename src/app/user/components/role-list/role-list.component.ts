import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { RoleWithPermissions } from '../../models/roleWithPermissions.model';

@Component({
  selector: 'app-role-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit {

  @Input() roles: RoleWithPermissions[];
  @Input() isLoading: boolean;
  @Input() cols: any[];
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

}
