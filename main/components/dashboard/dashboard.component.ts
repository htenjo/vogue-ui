import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {DashboardStatistics} from '../db-statistics/db-statistics.component';
import {DashboardHotEvent} from '../db-hot-event/db-hot-event.component';
import {DashboardHotTask} from '../db-hot-task/db-hot-task.component';
import {EventListComponent} from '../event/event-list';
import {ReportEventsByType} from "../report_events_by_type/report_events_by_type.component";
import {ReportOpenTaskByEventType} from "../report-open-tasks-by-event-type/report-open-tasks-by-event-type.component";
import {ReportEventsCreatedBetween} from "../report_events_created_between/report_events_created_between.component";

@Component({
    selector: "vogue-dashboard",
    templateUrl: "dashboard.template.html",
    directives: [EventListComponent, DashboardStatistics, ReportEventsByType, ReportOpenTaskByEventType, ReportEventsCreatedBetween
        , DashboardHotEvent, DashboardHotTask, ROUTER_DIRECTIVES],
    moduleId: module.id
})

export class DashBoardComponent {

}