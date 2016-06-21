import { Component, Input, OnInit } from '@angular/core';
import { Event, EventImpl } from '../../model/event';
import { EventService } from '../../services/event-service';

@Component({
  selector: "event-detail",
  templateUrl: "event-detail.html",
  providers: [EventService],
  moduleId: module.id
})
export class EventDetailComponent {
    @Input()
    event: Event;
    eventTypes : string[];

    constructor(private service: EventService){
    }
    
    ngOnInit(){
      this.loadEventTypes();
    }

    save(){
      this.service.create(this.event).then(
        event => this.event = event
      );
    }

    cancel(){
      this.event = null;
    }
    
    loadEventTypes(){
      let response = this.service.listEventTypes()
        .then(eventTypes => this.eventTypes = eventTypes);
    }
}