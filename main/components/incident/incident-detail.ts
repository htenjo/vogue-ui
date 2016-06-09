import { Component, Input } from '@angular/core';
import { Event } from '../../model/event';

@Component({
  selector: "incident-detail",
  templateUrl: "incident-detail.html",
  moduleId: module.id
})
export class IncidentDetailComponent {
    @Input()
    event: Event;
}