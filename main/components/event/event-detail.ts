import { Component, Input } from '@angular/core';
import { Event } from '../../model/event';

@Component({
  selector: "event-detail",
  templateUrl: "event-detail.html",
  moduleId: module.id
})
export class EventDetailComponent {
    @Input()
    event;

    save(){
      this.event = null;
    }
}