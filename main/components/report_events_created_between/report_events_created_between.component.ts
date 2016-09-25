import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event-service";


@Component({
    selector: "report-events-created-between",
    templateUrl: "report_events_created_between.template.html",
    styleUrls: ["report_events_created_between.css"],
    moduleId: module.id
})
export class ReportEventsCreatedBetween implements OnInit{
    private createdEvents : number;
    private startDate : string = "2015-09-01";
    private endDate : string = "2016-09-30";

    constructor(private service: EventService){}

    ngOnInit(){
        this.loadInfo();
    }

    loadInfo(){
        this.service.reportEventsCreatedBetween(this.startDate, this.endDate)
            .subscribe(reportInfo => {
                this.createdEvents = reportInfo;
            });
    }

    update(){
        this.loadInfo()
    }
}