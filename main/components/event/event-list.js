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
var event_1 = require('../../model/event');
var event_detail_1 = require('./event-detail');
var event_service_1 = require('../../services/event-service');
var DEFAULT_ITEMS_BY_PAGE = 5;
var EventListComponent = (function () {
    function EventListComponent(service) {
        this.service = service;
        this.currentPage = 1;
        this.totalPages = 0;
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.loadEvents();
    };
    EventListComponent.prototype.selectEvent = function (event) {
        console.log("Event selected " + event.id);
        this.selectedEvent = event;
    };
    EventListComponent.prototype.showEmptyForm = function () {
        this.selectedEvent = new event_1.EventImpl();
    };
    EventListComponent.prototype.loadEvents = function () {
        var _this = this;
        var response = this.service.list(DEFAULT_ITEMS_BY_PAGE, this.currentPage - 1)
            .then(function (listWrapper) {
            _this.events = listWrapper.content;
            _this.currentPage = listWrapper.number + 1;
            _this.totalPages = listWrapper.totalPages;
        });
    };
    EventListComponent.prototype.nextPage = function () {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
            this.loadEvents();
        }
    };
    EventListComponent.prototype.beforePage = function () {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.loadEvents();
        }
    };
    EventListComponent = __decorate([
        core_1.Component({
            selector: "event-list",
            templateUrl: "event-list.html",
            styleUrls: ["event-list.css"],
            directives: [event_detail_1.EventDetailComponent],
            providers: [event_service_1.EventService],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [event_service_1.EventService])
    ], EventListComponent);
    return EventListComponent;
}());
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=event-list.js.map