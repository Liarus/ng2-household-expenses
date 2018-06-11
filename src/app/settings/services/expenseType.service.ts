import { Observable } from 'rxjs/Observable';
import { Injectable, Inject } from '@angular/core';

import { HttpService } from './../../shared/services/http.service';
import { ExpenseType } from '../models/expenseType.model';
import { AppConfig } from '../../shared/models/appConfig.model';
import { CreateExpenseType } from './../models/requests/createExpenseType.model';
import { ModifyExpenseType } from './../models/requests/modifyExpenseType.model';
import { DeleteExpenseType } from './../models/requests/deleteExpenseType.model';

@Injectable()
export class ExpenseTypeService {

    private expenseTypeEndpoint = '/api/expenseType';
    private userEndpoint = '/api/user';

    constructor(private httpService: HttpService,
                @Inject('IAppConfig') private appConfig: AppConfig) {
    }

    getAllForUser(userId: number): Observable<ExpenseType[]> {
        return this.httpService.get<ExpenseType[]>(
            `${this.appConfig.BASE_URL}${this.userEndpoint}/${userId}/expenseTypes`
        );
    }

    create(request: CreateExpenseType): Observable<any> {
        return this.httpService.put<any>(
            `${this.appConfig.BASE_URL}${this.expenseTypeEndpoint}`, request
        );
    }

    update(request: ModifyExpenseType): Observable<any> {
        return this.httpService.postModel<any>(
            `${this.appConfig.BASE_URL}${this.expenseTypeEndpoint}`, request
        );
    }

    delete(request: DeleteExpenseType): Observable<any> {
        return this.httpService.delete(
            `${this.appConfig.BASE_URL}${this.expenseTypeEndpoint}/${request.id}`
        );
    }
}
