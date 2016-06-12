import { Injectable } from '@angular/core';
import { EVENT_INFO } from './event-mocks';
import { Event } from '../model/event';
import { ListWrapper } from '../model/common';
import { Headers, Http, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_EVENT_URI = "/event";
const API_EMPLOYEE_END_POINT = "/employee";
const API_AREA_END_POINT = "/area";
const API_TASK_END_POINT = "/event/{eventId}/task";

@Injectable()
export class EventService {
    private eventEndPoint = API_SERVER_BASE_URL + API_EVENT_URI;

    constructor(private http: Http) { }

    list(itemsByPage: number, requiredPage:number): Promise<ListWrapper<Event>> {
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;

        return this.http.get(this.eventEndPoint, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    find(id: number): Promise<Event[]> {
        return this.http.get(this.eventEndPoint)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    create(event: Event): Promise<Event>{
        let body = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.eventEndPoint, body, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('::: EventService-ERROR: ', error);
        return Promise.reject(error.message || error);
    }
}