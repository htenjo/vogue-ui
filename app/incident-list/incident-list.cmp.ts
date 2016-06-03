import { Component } from '@angular/core';

@Component({
  selector: "incident-list",
  templateUrl: "incident-list.cmp.html",
  styleUrls: ["incident-list.cmp.css"],
  moduleId: module.id
})
export class IncidentComponent { 
    incidents : Incident[];
}



export class Incident{
  sio: string;
  creationDate: string;
  type: string;
  criticity: string;
  severity: string;
  probability: number;
  completed: number;
}