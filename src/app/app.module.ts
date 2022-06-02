import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module';
import {PagesModule} from './pages/pages.module';
import {InterceptService} from './core/_base/generic/utils/intercept.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    PagesModule,
    BrowserAnimationsModule
  ],
  exports: [
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
