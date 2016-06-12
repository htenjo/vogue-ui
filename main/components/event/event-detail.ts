import { Component, Input } from '@angular/core';
import { Event } from '../../model/event';
import { EventService } from '../../services/event-service';

@Component({
  selector: "event-detail",
  templateUrl: "event-detail.html",
  providers: [EventService],
  moduleId: module.id
})
export class EventDetailComponent {
    @Input()
    event;

    constructor(private service: EventService){
    }

    save(){
      this.service.create(this.event).then(
        event => this.event = event
      );
    }

    cancel(){
      this.event = null;
    }
}