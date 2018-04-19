import { Observable } from 'rxjs/Rx';

export default class ServiceUtil{

    static baseUrl: string = 'http://localhost:8001/resources';

    static map<T>( response: T ) {
        return response;
    }

    static handleError(error: any) {
        return Observable.throw(error);
    }

}