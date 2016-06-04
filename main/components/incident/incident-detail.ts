import { Component, Input } from '@angular/core';
import { Incident } from 'main/model/incident';

@Component({
  selector: "incident-detail",
  templateUrl: "incident-detail.html",
  moduleId: module.id
})
export class IncidentDetailComponent {
    @Input()
    incident: Incident;
}