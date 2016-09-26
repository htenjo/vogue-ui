import {Component, OnInit} from "@angular/core";
import {TaskService} from "../../services/task-service";
import {ReportTasksOpenByEmployee} from "../../model/report";

const DEFAULT_ITEMS_BY_PAGE = 5;

@Component({
    selector: "report-open-tasks-by-employee",
    templateUrl: "report-open-tasks-by-employee.template.html",
    styleUrls: ["report-open-tasks-by-employee.css"],
    moduleId: module.id
})
export class ReportOpenTasksByEmployee implements OnInit{
    private reportInfo : ReportTasksOpenByEmployee [];
    private startDate : string = "2015-09-01";
    private endDate : string = "2016-09-30";
    private currentPage: number = 1;
    private totalPages: number = 0;

    constructor(private service: TaskService){}

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
            .reportOpenTasksByEmployee(this.startDate, this.endDate, DEFAULT_ITEMS_BY_PAGE, this.currentPage - 1)
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