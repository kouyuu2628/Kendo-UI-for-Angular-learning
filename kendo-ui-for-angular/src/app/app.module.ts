import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { GridModule } from '@progress/kendo-angular-grid';
import { GridComponent } from './grid/grid.component';
import { DataBindingDerectiveComponent } from './data-binding-derective/data-binding-derective.component';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DataBindingDerectiveComponent
  ],
  imports: [
    BrowserModule,
    // Register the modules for Kendo UI
    BrowserAnimationsModule,
    ButtonsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
