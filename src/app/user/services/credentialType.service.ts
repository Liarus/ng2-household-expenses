import { AppConfig } from './../../shared/models/appConfig.model';
import { ModifyCredentialType } from './../models/requests/modifyCredentialType.model';
import { CreateCredentialType } from './../models/requests/createCredentialType.model';
import { Observable } from 'rxjs/Observable';
import { CredentialType } from '../models/credentialType.model';
import { HttpService } from '../../shared/services/http.service';
import { Inject } from '@angular/core';
export class CredentialTypeService {

    private credentialTypeEndpoint = '/api/credentialType';

    constructor(private httpService: HttpService,
        @Inject('IAppConfig') private appConfig: AppConfig) {
    }

    getAll(): Observable<CredentialType[]> {
        return this.httpService.get<CredentialType[]>(
            `${this.appConfig.BASE_URL}${this.credentialTypeEndpoint}`
        );
    }

    create(request: CreateCredentialType): Observable<any> {
        return this.httpService.put<any>(
            `${this.appConfig.BASE_URL}${this.credentialTypeEndpoint}`, request
        );
    }

    update(request: ModifyCredentialType): Observable<any> {
        return this.httpService.post<any>(
            `${this.appConfig.BASE_URL}${this.credentialTypeEndpoint}`, request
        );
    }

    delete(id: number): Observable<any> {
        return this.httpService.delete(
            `${this.appConfig.BASE_URL}${this.credentialTypeEndpoint}/${id}`
        );
    }
}
