import {Component, OnInit} from "@angular/core";
import {EventService} from "../../services/event-service";
import {ReportEventsCreatedByArea} from "../../model/report";

const DEFAULT_ITEMS_BY_PAGE = 5;

@Component({
    selector: "report-events-by-area",
    templateUrl: "report_events_by_area.template.html",
    styleUrls: ["report_events_by_area.css"],
    moduleId: module.id
})
export class ReportEventsByArea implements OnInit{
    private reportInfo : ReportEventsCreatedByArea [];
    private startDate : string = "2015-09-01";
    private endDate : string = "2016-09-30";
    private currentPage: number = 1;
    private totalPages: number = 0;

    constructor(private service: EventService){}

    /**
     *
     */
    ngOnInit(){
        this.loadInfo();
    }

    /**
     *
     */
    loadInfo(){
        this.service
            .reportEventsCreatedByArea(this.startDate, this.endDate, DEFAULT_ITEMS_BY_PAGE, this.currentPage - 1)
            .subscribe(listWrapper => {
                this.reportInfo = listWrapper.content;
                this.currentPage = listWrapper.number + 1;
                this.totalPages = listWrapper.totalPages;
            });
    }

    /**
     *
     */
    update(){
        this.loadInfo()
    }

    nextPage(){
        if(this.currentPage < this.totalPages){
            this.currentPage++;
            this.loadInfo();
        }
    }

    beforePage(){
        if(this.currentPage > 1){
            this.currentPage--;
            this.loadInfo();
        }
    }
}