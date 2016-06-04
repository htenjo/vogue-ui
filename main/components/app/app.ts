import { Component } from '@angular/core';
import { IncidentListComponent } from '../incident/incident-list';

@Component({
  selector: "vogue-app",
  templateUrl: "app.html",
  styleUrls: ["app.css"],
  directives: [IncidentListComponent],
  moduleId: module.id
})

export class AppComponent { 
    title : string = "Vogue Incidents"
}