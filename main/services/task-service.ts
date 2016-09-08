import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import { ListWrapper } from '../model/common';
import { Headers, Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_TASK_URI = "/task";
const API_TASK_HOT_URI = "/closeToExpire";

@Injectable()
export class TaskService {
    private taskEndPoint = API_SERVER_BASE_URL + API_TASK_URI;
    private taskHotEndPoint = API_SERVER_BASE_URL + API_TASK_URI + API_TASK_HOT_URI;

    constructor(private http: Http) { }

    list(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Task>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;
        
        return this.http.get(this.taskEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    listHot(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Task>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;

        return this.http.get(this.taskHotEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(task: Task): Observable<Task>{
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.taskEndPoint, body, options)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    delete(id: number) : void {
        console.log("::: Operation not implemented yet");
    }

    private handleError(error: any) {
        console.error('::: TaskService-ERROR: ', error);
        return Observable.throw(error.message || error);
    }
}