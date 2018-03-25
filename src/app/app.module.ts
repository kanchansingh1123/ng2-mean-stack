import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatTableModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule
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
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [
    ApiHeaders,
    DBService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
