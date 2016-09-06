import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app/app.component';
import { VOGUE_ROUTER_PROVIDERS } from './components/app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [VOGUE_ROUTER_PROVIDERS, HTTP_PROVIDERS]);