import { Component, OnInit } from '@angular/core';
import { Incident } from 'main/model/incident';
import { IncidentDetailComponent } from './incident-detail';
import { IncidentService } from '../../services/incident-service';

@Component({
  selector: "incident-list",
  templateUrl: "incident-list.html",
  styleUrls: ["incident-list.css"],
  directives: [IncidentDetailComponent],
  providers: [IncidentService],
  moduleId: module.id
})
export class IncidentListComponent { 
    incidents : Incident[];
    selectedIncident: Incident;
    
    constructor(private service: IncidentService){
    }
    
    selectIncident(incident: Incident){
      console.log("Incident selected " + incident.sio);
      this.selectedIncident = incident;
    }
    
    showEmptyForm(){
      this.selectedIncident = {}
    }
    
    ngOnInit(){
      let response = this.service.findAllIncidents()
        .then(incidents => this.incidents = incidents);
    }
}