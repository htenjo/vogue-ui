import {Component, OnInit, OnDestroy} from '@angular/core';
import {TaskService} from "../../services/task-service";
import {ReportTasksClosedInLastYear} from "../../model/report";
import {Observable} from "rxjs";


@Component({
    selector: "db-statistics",
    templateUrl: "db-statistics.template.html",
    moduleId: module.id
})
export class DashboardStatistics implements OnInit{
    private reportClosedTask : ReportTasksClosedInLastYear;
    private percentage : number;

    constructor(private service: TaskService){
    }

    ngOnInit(){
        this.loadEvents();
    }

    loadEvents(){
       this.service.reportClosedTasksInLastYear()
            .subscribe(reportInto => {
                this.reportClosedTask = reportInto;
                this.percentage = (this.reportClosedTask.totalTasks - this.reportClosedTask.openTasks) / this.reportClosedTask.totalTasks;
            });
    }
}