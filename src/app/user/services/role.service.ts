import { AppConfig } from './../../shared/models/appConfig.model';
import { ModifyRole } from './../models/requests/modifyRole.model';
import { CreateRole } from './../models/requests/createRole.model';
import { Observable } from 'rxjs/Observable';
import { Role } from '../models/role.model';
import { HttpService } from '../../shared/services/http.service';
import { Inject } from '@angular/core';

export class RoleService {

    private RoleEndpoint = '/api/Role';

    constructor(private httpService: HttpService,
        @Inject('IAppConfig') private appConfig: AppConfig) {
    }

    getAll(): Observable<Role[]> {
        return this.httpService.get<Role[]>(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}`
        );
    }

    create(request: CreateRole): Observable<any> {
        return this.httpService.put<any>(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}`, request
        );
    }

    update(request: ModifyRole): Observable<any> {
        return this.httpService.postModel<any>(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}`, request
        );
    }

    delete(id: number): Observable<any> {
        return this.httpService.delete(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}/${id}`
        );
    }

    assignPermission(roleId: number, permissionId: number): Observable<any> {
        return this.httpService.post(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}/${roleId}/assignPermission/${permissionId}`
        );
    }

    unassignPermission(roleId: number, permissionId: number): Observable<any> {
        return this.httpService.post(
            `${this.appConfig.BASE_URL}${this.RoleEndpoint}/${roleId}/unassignPermission/${permissionId}`
        );
    }
}
