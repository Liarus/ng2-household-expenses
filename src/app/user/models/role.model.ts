export interface Role {
    id: number;
    code: string;
    name: string;
    permissionIds: number[];
    version: number;
}
