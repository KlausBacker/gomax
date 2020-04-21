import {NgModule} from '@angular/core';

import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule
  ]
})
export class CoreModule {
}
