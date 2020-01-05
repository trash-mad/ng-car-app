import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CarsFormComponent } from './cars-form/cars-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CarComponent } from './car/car.component';
import { NavComponent } from './nav/nav.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsFormComponent,
    CarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
