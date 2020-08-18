import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DataTableComponent } from './core/data-table/data-table.component';
import { LinearGaugeComponent } from './core/linear-gauge/linear-gauge.component';


@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    LinearGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
