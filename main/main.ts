import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app/app';
import { HTTP_PROVIDERS } from '@angular/http';

/*
import { enableProdMode } from '@angular/core';
if (environment.production){
    enableProdMode();
}
*/
bootstrap(AppComponent, [HTTP_PROVIDERS]);