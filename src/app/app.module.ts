import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceforgitService} from './serviceforgit.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceforgitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
