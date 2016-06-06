import { Injectable } from '@angular/core';
import { INCIDENT_INFO } from './incident-mocks';
import { Incident } from '../model/Incident';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class IncidentService {
    private incidentsUrl = "http://localhost:8080/incidents";
    
    constructor(private http: Http) { }

    findAllIncidents() : Promise<Incident[]>{
        return this.http.get(this.incidentsUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
    }
    
    findIncident(id: number) : Incident{
        return;
    }
    
    private handleError(error: any) {
        console.error('::: IncidentService-ERROR: ', error);
        return Promise.reject(error.message || error);
    }
}