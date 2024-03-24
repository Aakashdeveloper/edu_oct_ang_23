import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employeeForm/employeeForm.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}