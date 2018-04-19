import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import ServiceUtil from '../../shared/Service.Util';

@Injectable()
export class ManagerService {

    headerList = ServiceUtil.getHttpHeaders('text/html', 'text/html');

    constructor(private http: HttpClient) { }

    turn(turn: boolean): Observable<Number> {
        console.log(ServiceUtil.baseUrl + '/home');
        return this.http
            .get(ServiceUtil.baseUrl + '/lampada', {headers: this.headerList})
            .map(ServiceUtil.map)
            .catch(ServiceUtil.handleError);
    }

}
