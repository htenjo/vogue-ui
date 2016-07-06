"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app/app.component');
var app_routes_1 = require('./components/app/app.routes');
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.VOGUE_ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map