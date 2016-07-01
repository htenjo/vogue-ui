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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('./rxjs-operators');
var Observable_1 = require('rxjs/Observable');
var API_SERVER_BASE_URL = "http://localhost:8080";
var API_AREA_URI = "/area";
var AreaService = (function () {
    function AreaService(http) {
        this.http = http;
        this.areaEndPoint = API_SERVER_BASE_URL + API_AREA_URI;
    }
    AreaService.prototype.listAll = function () {
        return this.http.get(this.areaEndPoint)
            .map(function (response) { return response.json().content; })
            .catch(this.handleError);
    };
    AreaService.prototype.handleError = function (error) {
        console.error('::: EventService-ERROR: ', error);
        return Observable_1.Observable.throw(error.message || error);
    };
    AreaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AreaService);
    return AreaService;
}());
exports.AreaService = AreaService;
//# sourceMappingURL=area-service.js.map