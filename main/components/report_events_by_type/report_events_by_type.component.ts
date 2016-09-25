import {Component, OnInit} from '@angular/core';
import {EventService} from "../../services/event-service";
import {ReportEventsCreatedByEventType} from "../../model/report";


@Component({
    selector: "report-events-by-type",
    templateUrl: "report_events_by_type.template.html",
    styleUrls: ["report_events_by_type.css"],
    moduleId: module.id
})
export class ReportEventsByType implements OnInit{
    private reportInfo : ReportEventsCreatedByEventType [];
    private startDate : string = "2015-09-01";
    private endDate : string = "2016-09-30";

    constructor(private service: EventService){}

    ngOnInit(){
        this.loadInfo();
    }

    loadInfo(){
        this.service.reportEventsCreatedByEventType(this.startDate, this.endDate)
            .subscribe(reportInfo => {
                this.reportInfo = reportInfo;
            });
    }

    update(){
        this.loadInfo()
    }
}