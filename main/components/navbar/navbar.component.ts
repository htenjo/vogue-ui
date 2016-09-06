import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: "vogue-navbar",
    templateUrl: "navbar.template.html",
    directives: [ROUTER_DIRECTIVES],
    moduleId: module.id
})
export class NavBar{

}