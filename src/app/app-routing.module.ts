import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { ToDOComponent } from './to-do/to-do.component';
import { EmployeeHandllerComponent } from './employee-handller/employee-handller.component';

const routes: Routes = [
  {path:'',component:ToDOComponent},
  {path:'Tasks',component:TasksComponent},
  {path:'employeeH',component:EmployeeHandllerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
