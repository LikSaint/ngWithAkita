import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeroesApi} from './heroesApi';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [
    HeroesApi,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
