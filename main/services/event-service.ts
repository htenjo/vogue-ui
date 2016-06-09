import { Injectable } from '@angular/core';
import { EVENT_INFO } from './event-mocks';
import { Event } from '../model/event';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class EventService {
    private incidentsUrl = "http://localhost:8080/incidents";
    
    constructor(private http: Http) { }

    findAllIncidents() : Promise<Event[]>{
        return this.http.get(this.incidentsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
    }
    
    findIncident(id: number) : Event{
        return;
    }
    
    private handleError(error: any) {
        console.error('::: IncidentService-ERROR: ', error);
        return Promise.reject(error.message || error);
    }
}