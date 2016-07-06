import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {NavBar} from '../navbar/navbar.component';
import {Footer} from '../footer/footer.component';
import {EventListComponent} from '../event/event-list';

import { EventService } from '../../services/event-service';
import { AreaService } from '../../services/area-service';

@Component({
    selector: "vogue-app",
    templateUrl: "app.template.html",
    directives: [EventListComponent, NavBar, Footer, ROUTER_DIRECTIVES],
    providers: [EventService, AreaService],
    moduleId: module.id
})

export class AppComponent {
    title:string = "Vogue - Security Events"
}