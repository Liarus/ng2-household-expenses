import { Permission } from './permission.model';

export interface RoleWithPermissions {
    id: number;
    code: string;
    name: string;
    permissions: Permission[];
    version: number;
}
