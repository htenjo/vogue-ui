import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventDetailComponent } from './event-detail';
import { EventService } from '../../services/event-service';

@Component({
  selector: "event-list",
  templateUrl: "event-list.html",
  styleUrls: ["event-list.css"],
  directives: [EventDetailComponent],
  providers: [EventService],
  moduleId: module.id
})
export class EventListComponent { 
    events : Event[];
    selectedEvent: Event;
    
    constructor(private service: EventService){
    }
    
    selectEvent(event: Event){
      console.log("Event selected " + event.id);
      this.selectedEvent = event;
    }
    
    showEmptyForm(){
      //this.selectedEvent = {};
    }
    
    ngOnInit(){
      let response = this.service.list()
        .then(events => this.events = events);
    }
}