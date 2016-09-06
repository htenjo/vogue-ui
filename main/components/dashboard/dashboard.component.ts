import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {DashboardStatistics} from '../db-statistics/db-statistics.component';
import {DashboardHotEvent} from '../db-hot-event/db-hot-event.component';
import {DashboardHotTask} from '../db-hot-task/db-hot-task.component';
import {EventListComponent} from '../event/event-list';

@Component({
    selector: "vogue-dashboard",
    templateUrl: "dashboard.template.html",
    directives: [EventListComponent, DashboardStatistics
        , DashboardHotEvent, DashboardHotTask, ROUTER_DIRECTIVES],
    moduleId: module.id
})

export class DashBoardComponent {

}