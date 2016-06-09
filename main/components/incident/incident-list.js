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
var event_service_1 = require('../../services/event-service');
var IncidentListComponent = (function () {
    function IncidentListComponent(service) {
        this.service = service;
    }
    IncidentListComponent.prototype.selectIncident = function (incident) {
        console.log("Incident selected " + incident.sio);
        this.selectedIncident = incident;
    };
    IncidentListComponent.prototype.showEmptyForm = function () {
        //this.selectedIncident = {}
    };
    IncidentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var response = this.service.findAllIncidents()
            .then(function (incidents) { return _this.incidents = incidents; });
    };
    IncidentListComponent = __decorate([
        core_1.Component({
            selector: "incident-list",
            templateUrl: "incident-list.html",
            styleUrls: ["incident-list.css"],
            directives: [incident_detail_1.IncidentDetailComponent],
            providers: [event_service_1.EventService]
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], IncidentListComponent);
    return IncidentListComponent;
}());
exports.IncidentListComponent = IncidentListComponent;
//# sourceMappingURL=incident-list.js.map