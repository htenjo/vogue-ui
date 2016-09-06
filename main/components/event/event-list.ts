import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { EventDetailComponent } from './event-detail';
import { EventService } from '../../services/event-service';

const DEFAULT_ITEMS_BY_PAGE = 10;

@Component({
  selector: "event-list",
  templateUrl: "event-list.html",
  styleUrls: ["event-list.css"],
  directives: [EventDetailComponent],
  moduleId: module.id
})
export class EventListComponent {
    events : Event[];
    selectedEvent: Event;
    currentPage: number = 1;
    totalPages: number = 0;
    
    constructor(private service: EventService){
    }
    
    ngOnInit(){
      this.loadEvents();
    }

    selectEvent(event: Event){
      console.log("Event selected " + event.id);
      this.selectedEvent = event;
    }
    
    showEmptyForm(){
      this.selectedEvent = new Event();
    }
    
    loadEvents(){
      this.service.list(DEFAULT_ITEMS_BY_PAGE, this.currentPage - 1)
        .subscribe(listWrapper => {
          this.events = listWrapper.content;
          this.currentPage = listWrapper.number + 1;
          this.totalPages = listWrapper.totalPages;
        });
    }

    nextPage(){
      if(this.currentPage < this.totalPages){
        this.currentPage++;
        this.loadEvents();
      }
    }

    beforePage(){
      if(this.currentPage > 1){
        this.currentPage--;
        this.loadEvents();
      }
    }
}