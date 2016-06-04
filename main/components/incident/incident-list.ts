import { Component } from '@angular/core';
import { Incident } from 'main/model/incident';
import { IncidentDetailComponent} from './incident-detail';

@Component({
  selector: "incident-list",
  templateUrl: "incident-list.html",
  styleUrls: ["incident-list.css"],
  directives: [IncidentDetailComponent],
  moduleId: module.id
})
export class IncidentListComponent { 
    incidents : Incident[] = IncidentInfo;
    selectedIncident: Incident;
    
    selectIncident(incident: Incident){
      console.log("Incident selected " + incident.sio);
      this.selectedIncident = incident;
    }
    
    showEmptyForm(){
      this.selectedIncident = {}
    }
}



let IncidentInfo = [
  {sio: "1", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "2", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "3", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "4", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "5", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "6", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "7", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "8", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "9", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "10", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "11", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "12", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "13", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
  ,{sio: "14", creationDate:"2016-06-02", type:"type", criticity:"criticity", severity:"severity", probability:"probability", completed:95}
];