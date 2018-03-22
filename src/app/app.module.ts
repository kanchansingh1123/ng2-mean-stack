import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material'

import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { ApiHeaders } from '../providers/service/header.service';
import { DBService } from '../providers/service/db.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule
  ],
  providers: [
    ApiHeaders,
    DBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
