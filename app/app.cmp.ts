import { Component } from '@angular/core';
import { IncidentComponent } from './incident-list/incident-list.cmp';

@Component({
  selector: "vogue-app",
  templateUrl: "app.cmp.html",
  styleUrls: ["app.cmp.css"],
  directives: [IncidentComponent],
  moduleId: module.id
})

export class AppComponent { 
    title : string = "Vogue Incidents"
}