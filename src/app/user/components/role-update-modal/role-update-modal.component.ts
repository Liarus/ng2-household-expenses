import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Role } from './../../models/role.model';
import { ModifyRole } from '../../models/requests/modifyRole.model';
import { Permission } from '../../models/permission.model';
import { SelectItem } from 'primeng/components/common/selectitem';

const fg = dataItem => new FormGroup({
  'id': new FormControl(dataItem.id),
  'permissionIds': new FormControl(dataItem.permissionIds, [Validators.required]),
  'name': new FormControl(dataItem.name, [Validators.required, Validators.maxLength(255)]),
  'code': new FormControl(dataItem.code, [Validators.maxLength(255)]),
  'version': new FormControl(dataItem.version)
});

@Component({
  selector: 'app-role-update-modal',
  templateUrl: './role-update-modal.component.html',
  styleUrls: ['./role-update-modal.component.scss']
})
export class RoleUpdateModalComponent implements OnInit {

  @Input() role: Role;
  @Input() permissions: Permission[];
  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter<ModifyRole>();

  formGroup: FormGroup;
  permissionSelect: SelectItem[] = [];

  constructor() {
  }

  ngOnInit() {
    this.formGroup = fg(this.role);
    this.permissionSelect =
      this.permissions.map(permission => {
        return {label: permission.name, value: permission.id};
    });
  }

  save() {
    if (!this.formGroup.dirty) {
      this.cancel.emit();
      return;
    }
    if (this.formGroup.valid) {
      const dataItem = this.formGroup.value;
      this.ok.emit(dataItem);
    }
  }
}
