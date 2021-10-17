import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatLineModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSliderModule } from "@angular/material/slider";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonsComponent } from './persons/persons.component';
import { RoutingModule } from "./routing/routing.module";

@NgModule({
    declarations: [
        AppComponent,
        PersonsComponent,
        PersonInputComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSliderModule,
        MatToolbarModule,
        MatListModule,
        MatLineModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
