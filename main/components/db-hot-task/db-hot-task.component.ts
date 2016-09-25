import { Component } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../services/task-service';


const DEFAULT_ITEMS_BY_PAGE = 10;

@Component({
    selector: "db-hot-task",
    templateUrl: "db-hot-task.template.html",
    styleUrls: ["db-hot-task-list.style.css"],
    moduleId: module.id
})
export class DashboardHotTask{
    tasks : Task[];
    currentPage: number = 1;
    totalPages: number = 0;

    constructor(private service: TaskService){
    }

    ngOnInit(){
        this.loadEvents();
    }

    loadEvents(){
        this.service.listHot(DEFAULT_ITEMS_BY_PAGE, this.currentPage - 1)
            .subscribe(listWrapper => {
                this.tasks = listWrapper.content;
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