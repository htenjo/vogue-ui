import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { IncidentDetailComponent } from './incident-detail';
import { EventService } from '../../services/event-service';

@Component({
  selector: "incident-list",
  templateUrl: "incident-list.html",
  styleUrls: ["incident-list.css"],
  directives: [IncidentDetailComponent],
  providers: [EventService]
})
export class IncidentListComponent { 
    incidents : Event[];
    selectedIncident: Event;
    
    constructor(private service: EventService){
    }
    
    selectIncident(incident: Event){
      console.log("Incident selected " + incident.sio);
      this.selectedIncident = incident;
    }
    
    showEmptyForm(){
      //this.selectedIncident = {}
    }
    
    ngOnInit(){
      let response = this.service.findAllIncidents()
        .then(incidents => this.incidents = incidents);
    }
}