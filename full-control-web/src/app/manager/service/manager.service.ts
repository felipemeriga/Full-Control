import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import ServiceUtil from '../../shared/Service.Util';

@Injectable()
export class ManagerService {

    constructor(private http: HttpClient) { }

    turn(turn: boolean): Observable<Number> {
        console.log(ServiceUtil.baseUrl + '/lampada');
        return this.http
            .put(ServiceUtil.baseUrl + '/lampada', turn)
            .map(ServiceUtil.map)
            .catch(ServiceUtil.handleError);
    }

}
