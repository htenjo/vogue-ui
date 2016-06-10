import { Component } from '@angular/core';
import { EventListComponent } from '../event/event-list';

@Component({
  selector: "vogue-app",
  templateUrl: "app.html",
  styleUrls: ["app.css"],
  directives: [EventListComponent],
  moduleId: module.id
})

export class AppComponent { 
    title : string = "Vogue - Eventos de Seguridad"
}