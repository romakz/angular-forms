import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Part1FormComponent } from './part1-form/part1-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Part2FormComponent } from './part2-form/part2-form.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1FormComponent,
    Part2FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
