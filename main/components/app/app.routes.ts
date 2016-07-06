import { provideRouter, RouterConfig }  from '@angular/router';
import {EventListComponent} from '../event/event-list';
import {DashBoardComponent} from '../dashboard/dashboard.component';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashBoardComponent
    },
    {   path: 'events', 
        component: EventListComponent 
    }
];

export const VOGUE_ROUTER_PROVIDERS = [
    provideRouter(routes)
];