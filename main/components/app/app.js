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
var navbar_component_1 = require('../navbar/navbar.component');
var db_statistics_component_1 = require('../db-statistics/db-statistics.component');
var db_hot_event_component_1 = require('../db-hot-event/db-hot-event.component');
var db_hot_task_component_1 = require('../db-hot-task/db-hot-task.component');
var footer_component_1 = require('../footer/footer.component');
var event_list_1 = require('../event/event-list');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Vogue - Eventos de Seguridad";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "vogue-app",
            templateUrl: "app.html",
            styleUrls: ["app.css"],
            directives: [event_list_1.EventListComponent, navbar_component_1.NavBar, db_statistics_component_1.DashboardStatistics,
                db_hot_event_component_1.DashboardHotEvent, db_hot_task_component_1.DashboardHotTask, footer_component_1.Footer],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map