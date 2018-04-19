import { Observable } from 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';

export default class ServiceUtil{

    static baseUrl: string = 'http://158.155.23.116:8081';

    static getHttpHeaders(accept: string , contentType: string): HttpHeaders {
        
        let headers = new HttpHeaders()
                            .set('Accept', accept)
        if(contentType){
            headers = headers.append('Content-Type', contentType);
        }
        return headers;
    }

    static map<T>( response: T ) {
        return response;
    }

    static handleError(error: any) {
        return Observable.throw(error);
    }

}