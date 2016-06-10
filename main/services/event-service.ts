import { Injectable } from '@angular/core';
import { EVENT_INFO } from './event-mocks';
import { Event } from '../model/event';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_EVENT_URI = "/event";
const API_EMPLOYEE_END_POINT = "/employee";
const API_AREA_END_POINT = "/area";
const API_TASK_END_POINT = "/event/{eventId}/task";

@Injectable()
export class EventService {
    private event_end_point = API_SERVER_BASE_URL + API_EVENT_URI;

    constructor(private http: Http) { }

    list(): Promise<Event[]> {
        return this.http.get(this.event_end_point)
            .toPromise()
            .then(response => response.json().content)
            .catch(this.handleError);
    }

    find(id: number): Promise<Event[]> {
        return this.http.get(this.event_end_point)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('::: EventService-ERROR: ', error);
        return Promise.reject(error.message || error);
    }
}