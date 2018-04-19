import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import ServiceUtil from '../../shared/Service.Util';

@Injectable()
export class ManagerService {

    headerList = ServiceUtil.getHttpHeaders('text/html', 'text/html');

    constructor(private http: HttpClient) { }

    turnLed(): Observable<string> {
        return this.http
            .get(ServiceUtil.baseUrl + '/lampada', {headers: this.headerList})
            .map(ServiceUtil.map)
            .catch(ServiceUtil.handleError);
    }

    turnMotor(): Observable<string> {
        return this.http
            .get(ServiceUtil.baseUrl + '/motor', {headers: this.headerList})
            .map(ServiceUtil.map)
            .catch(ServiceUtil.handleError);
    }

}
