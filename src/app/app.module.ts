import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { ToDOComponent } from './to-do/to-do.component';
import { EmployeeHandllerComponent } from './employee-handller/employee-handller.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ToDOComponent,
    EmployeeHandllerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
