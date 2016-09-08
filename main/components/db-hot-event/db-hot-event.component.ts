import { Component } from '@angular/core';
import { EventService } from '../../services/event-service';
import { Event } from '../../model/event';

const DEFAULT_ITEMS_BY_PAGE = 10;

@Component({
    selector: "db-hot-event",
    templateUrl: "db-hot-event.template.html",
    moduleId: module.id
})
export class DashboardHotEvent{
    events : Event[];

    constructor(private service: EventService){
    }

    ngOnInit(){
        this.loadEvents();
    }

    loadEvents(){
        this.service.listHot(DEFAULT_ITEMS_BY_PAGE, 0)
            .subscribe(listWrapper => {
                this.events = listWrapper.content;
            });
    }
}