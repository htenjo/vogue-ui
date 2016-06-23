import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { Area } from '../../model/employee';
import { EventService } from '../../services/event-service';
import { AreaService } from '../../services/area-service';

@Component({
  selector: "event-detail",
  templateUrl: "event-detail.html",
  providers: [EventService, AreaService],
  moduleId: module.id
})
export class EventDetailComponent implements OnInit{
    @Input()
    event: Event;
    eventTypes : string[];
    areas: Area [];

    constructor(private eventService: EventService
      , private areaService: AreaService){
    }
    
    ngOnInit(){
      this.loadEventTypes();
      this.loadAreas();
    }

    save(){
      this.eventService.create(this.event).subscribe(
        event => this.event = event
      );
    }

    cancel(){
      this.event = null;
    }
    
    loadEventTypes(){
      this.eventService.listEventTypes().subscribe(
        eventTypes => this.eventTypes = eventTypes
      );
    }

    loadAreas(){
      this.areaService.listAll().subscribe(
        areas => this.areas = areas
      );
    }
}