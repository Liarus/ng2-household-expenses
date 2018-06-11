import { AppConfig } from './../../shared/models/appConfig.model';
import { ModifyPermission } from './../models/requests/modifyPermission.model';
import { CreatePermission } from './../models/requests/createPermission.model';
import { Observable } from 'rxjs/Observable';
import { Permission } from '../models/Permission.model';
import { HttpService } from '../../shared/services/http.service';
import { Inject } from '@angular/core';

export class PermissionService {

    private permissionEndpoint = '/api/permission';

    constructor(private httpService: HttpService,
        @Inject('IAppConfig') private appConfig: AppConfig) {
    }

    getAll(): Observable<Permission[]> {
        return this.httpService.get<Permission[]>(
            `${this.appConfig.BASE_URL}${this.permissionEndpoint}`
        );
    }

    create(request: CreatePermission): Observable<any> {
        return this.httpService.put<any>(
            `${this.appConfig.BASE_URL}${this.permissionEndpoint}`, request
        );
    }

    update(request: ModifyPermission): Observable<any> {
        return this.httpService.postModel<any>(
            `${this.appConfig.BASE_URL}${this.permissionEndpoint}`, request
        );
    }

    delete(id: number): Observable<any> {
        return this.httpService.delete(
            `${this.appConfig.BASE_URL}${this.permissionEndpoint}/${id}`
        );
    }
}
