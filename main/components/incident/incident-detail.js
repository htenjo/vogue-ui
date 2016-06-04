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
var incident_1 = require('main/model/incident');
var IncidentDetailComponent = (function () {
    function IncidentDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof incident_1.Incident !== 'undefined' && incident_1.Incident) === 'function' && _a) || Object)
    ], IncidentDetailComponent.prototype, "incident", void 0);
    IncidentDetailComponent = __decorate([
        core_1.Component({
            selector: "incident-detail",
            templateUrl: "incident-detail.html",
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], IncidentDetailComponent);
    return IncidentDetailComponent;
    var _a;
}());
exports.IncidentDetailComponent = IncidentDetailComponent;
//# sourceMappingURL=incident-detail.js.map