import {Component} from '@angular/core';

import {NavBar} from '../navbar/navbar.component';
import {DashboardStatistics} from '../db-statistics/db-statistics.component';
import {DashboardHotEvent} from '../db-hot-event/db-hot-event.component';
import {DashboardHotTask} from '../db-hot-task/db-hot-task.component';
import {Footer} from '../footer/footer.component';
import {EventListComponent} from '../event/event-list';

@Component({
    selector: "vogue-app",
    templateUrl: "app.html",
    styleUrls: ["app.css"],
    directives: [EventListComponent, NavBar, DashboardStatistics
        , DashboardHotEvent, DashboardHotTask, Footer],
    moduleId: module.id
})

export class AppComponent {
    title:string = "Vogue - Eventos de Seguridad"
}