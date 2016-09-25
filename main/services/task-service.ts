import { Injectable } from '@angular/core';
import { Task } from '../model/task';
import {ReportTasksClosedInLastYear, ReportTasksOpenByEmployee} from '../model/report';
import { ListWrapper } from '../model/common';
import { Headers, Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_TASK_URI = "/task";
const API_TASK_HOT_URI = "/closeToExpire";
const API_TASK_REPORT_CLOSED_TASKS = "/reportClosedTasksInLastYear";
const API_TASK_REPORT_OPEN_TASKS_BY_EVENT_TYPE = "/reportOpenTasksPerEventType";
const API_TASK_REPORT_OPEN_TASKS_BY_EMPLOYEE = "/reportTasksByEmployee";

@Injectable()
export class TaskService {
    private taskEndPoint = API_SERVER_BASE_URL + API_TASK_URI;
    private taskHotEndPoint = API_SERVER_BASE_URL + API_TASK_URI + API_TASK_HOT_URI;
    private taskReportClosed = API_SERVER_BASE_URL + API_TASK_URI + API_TASK_REPORT_CLOSED_TASKS;
    private reportCreatedByEventType = API_SERVER_BASE_URL + API_TASK_URI + API_TASK_REPORT_OPEN_TASKS_BY_EVENT_TYPE;
    private reportByEmployee = API_SERVER_BASE_URL + API_TASK_URI + API_TASK_REPORT_OPEN_TASKS_BY_EMPLOYEE;

    constructor(private http: Http) { }

    /**
     *
     * @param itemsByPage
     * @param requiredPage
     * @returns {Observable<R>}
     */
    list(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Task>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;
        
        return this.http.get(this.taskEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param itemsByPage
     * @param requiredPage
     * @returns {Observable<R>}
     */
    listHot(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Task>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;

        return this.http.get(this.taskHotEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param task
     * @returns {Observable<R>}
     */
    create(task: Task): Observable<Task>{
        let body = JSON.stringify(task);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.taskEndPoint, body, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param id
     */
    delete(id: number) : void {
        console.log("::: Operation not implemented yet");
    }

    /**
     *
     * @returns {Observable<R>}
     */
    reportClosedTasksInLastYear() : Observable<ReportTasksClosedInLastYear>{
        return this.http.get(this.taskReportClosed)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @returns {Observable<R>}
     */
    reportOpenTasksByEventType() {
        return this.http.get(this.reportCreatedByEventType)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param itemsByPage
     * @param requiredPage
     * @param startDate
     * @param endDate
     * @returns {Observable<R>}
     */
    reportOpenTasksByEmployee(startDate:string,
                              endDate:string,
                              itemsByPage: number,
                              requiredPage:number) : Observable<ListWrapper<ReportTasksOpenByEmployee>> {
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("startDate", startDate);
        query.append("endDate", endDate);
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;

        return this.http.get(this.reportByEmployee, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: any) {
        console.error('::: TaskService-ERROR: ', error);
        return Observable.throw(error.message || error);
    }
}