import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { ListWrapper } from '../model/common';
import { Headers, Http, RequestOptions, URLSearchParams, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import './rxjs-operators';
import { Observable } from 'rxjs/Observable';
import {ReportEventsCreatedByEventType} from "../model/report";

const API_SERVER_BASE_URL = "http://localhost:8080";
const API_EVENT_URI = "/event";
const API_EVENT_TYPE_URI = "/utils/reportTypes";
const API_EVENT_HOT_URI = "/closeToExpire";
const API_EVENT_REPORT_URI = "/report";
const API_EVENT_REPORT_CREATED_BY_EVENT_TYPE = "/createdByEventType";

@Injectable()
export class EventService {
    private eventEndPoint = API_SERVER_BASE_URL + API_EVENT_URI;
    private eventHotEndPoint = API_SERVER_BASE_URL + API_EVENT_URI + API_EVENT_HOT_URI;
    private eventTypeEndPoint = API_SERVER_BASE_URL + API_EVENT_TYPE_URI;
    private reportCreatedByEventType = API_SERVER_BASE_URL + API_EVENT_URI + API_EVENT_REPORT_URI + API_EVENT_REPORT_CREATED_BY_EVENT_TYPE;

    /**
     *
     * @param http
     */
    constructor(private http: Http) { }

    /**
     *
     * @param itemsByPage
     * @param requiredPage
     * @returns {Observable<R>}
     */
    list(itemsByPage: number, requiredPage:number): Observable<ListWrapper<Event>>{
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;
        
        return this.http.get(this.eventEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param itemsByPage
     * @param requiredPage
     * @returns {Observable<R>}
     */
    listHot(itemsByPage: number, requiredPage:number) {
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("size", itemsByPage.toString());
        query.append("page", requiredPage.toString());
        options.search = query;

        return this.http.get(this.eventHotEndPoint, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @returns {Observable<R>}
     */
    listEventTypes(): Observable<string[]> {
        return this.http.get(this.eventTypeEndPoint)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param id
     * @returns {Observable<R>}
     */
    find(id: number): Observable<Event[]> {
        return this.http.get(this.eventEndPoint)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param event
     * @returns {Observable<R>}
     */
    create(event: Event): Observable<Event>{
        let body = JSON.stringify(event);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.eventEndPoint, body, options)
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
    reportEventsCreatedByEventType(startDate:string, endDate:string) {
        let options = new RequestOptions();
        let query = new URLSearchParams();
        query.append("startDate", startDate);
        query.append("endDate", endDate);
        options.search = query;

        return this.http.get(this.reportCreatedByEventType, options)
            .map(response => response.json())
            .catch(this.handleError);
    }

    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: any) {
        console.error('::: EventService-ERROR: ', error);
        return Observable.throw(error.message || error);
    }
}