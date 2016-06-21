import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { ListWrapper } from '../model/common';
import { Headers, Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_EVENT_URI = "/event";
const API_EVENT_TYPE_URI = "/utils/reportTypes";
const API_TASK_END_POINT = "/event/{eventId}/task";

@Injectable()
export class EventService {
    private eventEndPoint = API_SERVER_BASE_URL + API_EVENT_URI;
    private eventTypeEndPoint = API_SERVER_BASE_URL + API_EVENT_TYPE_URI;

    constructor(private http: Http) { }

    list(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Event>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;
        
        return this.http.get(this.eventEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    listEventTypes(): Observable<string[]> {
        return this.http.get(this.eventTypeEndPoint)
            .map(response => response.json())
            .catch(this.handleError);
    }

    find(id: number): Observable<Event[]> {
        return this.http.get(this.eventEndPoint)
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(event: Event): Observable<Event>{
        let body = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.eventEndPoint, body, options)
            .map(response => response.json())
            .catch(this.handleError);
    }
    
    delete(id: number) : void {
        console.log("::: Operation not implemented yet");
    }

    private handleError(error: any) {
        console.error('::: EventService-ERROR: ', error);
        return Observable.throw(error.message || error);
    }
}