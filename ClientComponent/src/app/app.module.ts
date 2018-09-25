import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';
import { WebStorageModule } from 'ngx-store';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './app.interceptor';
import { BehaviorSubject } from 'rxjs';

import { routing } from './app.routes';

import { AppServices} from './app.services';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './app.material';

import { AppComponent } from './app.component';
import { MainComponent } from './components/views/public/main/main.component';
import { NavbarComponent } from './components/views/shared/navbar/navbar.component';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    HttpClientModule,
    WebStorageModule,
    routing
  ],
  providers: [
  AppServices,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }
  ],
  entryComponents: [
      MessageDialogComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
