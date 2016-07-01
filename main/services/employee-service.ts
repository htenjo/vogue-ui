import { Injectable } from '@angular/core';
import { Area } from '../model/employee';
import { Headers, Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_EMPLOYEE_URI = "/employee";

@Injectable()
export class EmployeeService {
    private areaEndPoint = API_SERVER_BASE_URL + API_EMPLOYEE_URI;
    
    constructor(private http: Http) { }

    listAll(): Observable<Area>{
        return this.http.get(this.areaEndPoint)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any) {
        console.error('::: EventService-ERROR: ', error);
        return Observable.throw(error.message || error);
    }
}