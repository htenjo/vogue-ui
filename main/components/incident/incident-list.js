"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var incident_detail_1 = require('./incident-detail');
var IncidentListComponent = (function () {
    function IncidentListComponent() {
        this.incidents = IncidentInfo;
    }
    IncidentListComponent.prototype.selectIncident = function (incident) {
        console.log("Incident selected " + incident.sio);
        this.selectedIncident = incident;
    };
    IncidentListComponent.prototype.showEmptyForm = function () {
        this.selectedIncident = {};
    };
    IncidentListComponent = __decorate([
        core_1.Component({
            selector: "incident-list",
            templateUrl: "incident-list.html",
            styleUrls: ["incident-list.css"],
            directives: [incident_detail_1.IncidentDetailComponent],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentListComponent);
    return IncidentListComponent;
}());
exports.IncidentListComponent = IncidentListComponent;
var IncidentInfo = [
    { sio: "1", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "2", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "3", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "4", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "5", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "6", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "7", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "8", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "9", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "10", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "11", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "12", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "13", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 },
    { sio: "14", creationDate: "2016-06-02", type: "type", criticity: "criticity", severity: "severity", probability: "probability", completed: 95 }
];
//# sourceMappingURL=incident-list.js.map