"use strict";
var router_1 = require('@angular/router');
var event_list_1 = require('../event/event-list');
var dashboard_component_1 = require('../dashboard/dashboard.component');
var routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashBoardComponent
    },
    { path: 'events',
        component: event_list_1.EventListComponent
    }
];
exports.VOGUE_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map