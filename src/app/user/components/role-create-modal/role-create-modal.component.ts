import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CreateRole } from './../../models/requests/createRole.model';
import { Permission } from '../../models/permission.model';
import { SelectItem } from 'primeng/components/common/selectitem';

const fg = dataItem => new FormGroup({
  'permissionIds': new FormControl(dataItem.permissionIds, [Validators.required]),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'code': new FormControl(dataItem.symbol, [Validators.maxLength(255)])
});

@Component({
  selector: 'app-role-create-modal',
  templateUrl: './role-create-modal.component.html',
  styleUrls: ['./role-create-modal.component.scss']
})
export class RoleCreateModalComponent implements OnInit {

  @Input() permissions: Permission[];
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<CreateRole>();

  formGroup: FormGroup;
  permissionSelect: SelectItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.formGroup = fg({});
    this.permissionSelect =
      this.permissions.map(permission => {
        return {label: permission.name, value: permission.id};
    });
  }

  save() {
    if (this.formGroup.valid) {
      const dataItem = this.formGroup.value;
      this.ok.emit(dataItem);
    }
  }
}
