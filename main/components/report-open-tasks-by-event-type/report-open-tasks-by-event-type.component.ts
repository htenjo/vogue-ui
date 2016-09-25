import {Component, OnInit} from "@angular/core";
import {ReportOpenTasksByEventType} from "../../model/report";
import {TaskService} from "../../services/task-service";


@Component({
    selector: "report-open-tasks-by-event-type",
    templateUrl: "report-open-tasks-by-event-type.template.html",
    styleUrls: ["report-open-tasks-by-event-type.css"],
    moduleId: module.id
})
export class ReportOpenTaskByEventType implements OnInit{
    private reportInfo : ReportOpenTasksByEventType [];

    constructor(private service: TaskService){}

    ngOnInit(){
        this.loadInfo();
    }

    loadInfo(){
        this.service.reportOpenTasksByEventType()
            .subscribe(reportInfo => {
                this.reportInfo = reportInfo;
            });
    }
}