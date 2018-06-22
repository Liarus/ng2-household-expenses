import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    get<T>(url: string): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
            }),
            withCredentials: true
          };

        return this.httpClient.get<T>(url, httpOptions);
    }

    postModel<T>(url: string, model: any): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }),
            withCredentials: true
        };

        return this.httpClient.post<T>(url, model, httpOptions);
    }

    post<T>(url: string): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }),
            withCredentials: true
        };

        return this.httpClient.post<T>(url, httpOptions);
    }

    put<T>(url: string, model: any): Observable<T> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }),
            withCredentials: true
        };

        return this.httpClient.put<T>(url, model, httpOptions);
    }

    delete(url: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json'
            }),
            withCredentials: true
        };

        return this.httpClient.delete(url, httpOptions);
    }
}
