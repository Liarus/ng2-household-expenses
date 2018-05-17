import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { HttpService } from './../../shared/services/http.service';
import { SavingType } from '../models/savingType.model';
import { AppConfig } from '../../shared/models/appConfig.model';
import { CreateSavingType } from './../models/requests/createSavingType.model';
import { ModifySavingType } from './../models/requests/modifySavingType.model';
import { DeleteSavingType } from './../models/requests/deleteSavingType.model';

@Injectable()
export class SavingTypeService {

    private savingTypeEndpoint = '/api/savingType';
    private userEndpoint = '/api/user';

    constructor(private httpService: HttpService,
                @Inject('IAppConfig') private appConfig: AppConfig) {
    }

    getAllForUser(userId: number): Observable<SavingType[]> {
        return this.httpService.get<SavingType[]>(
            `${this.appConfig.BASE_URL}${this.userEndpoint}/${userId}/savingTypes`
        );
    }

    create(request: CreateSavingType): Observable<any> {
        return this.httpService.put<any>(
            `${this.appConfig.BASE_URL}${this.savingTypeEndpoint}`, request
        );
    }

    update(request: ModifySavingType): Observable<any> {
        return this.httpService.post<any>(
            `${this.appConfig.BASE_URL}${this.savingTypeEndpoint}`, request
        );
    }

    delete(request: DeleteSavingType): Observable<any> {
        return this.httpService.delete(
            `${this.appConfig.BASE_URL}${this.savingTypeEndpoint}/${request.id}`
        );
    }
}
