import { Injectable } from '@angular/core';
import { EmployeeI } from './project_interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArrService {
  private generalTasks: object[] = [];
  private generalEmployees: object[] = [];
  frontEmployee: EmployeeI[] = [];
  backEndEmployee: EmployeeI[] = [];
  uiUxEmployee: EmployeeI[] = [];
  hrEmployee: EmployeeI[] = [];
  constructor() {}
  setData(task: object) {
    this.getTasks();
    this.generalTasks.push(task);
    localStorage.setItem('generalTasks', JSON.stringify(this.generalTasks));
  }

  getTasks() {
    let tasksDB: any = localStorage.getItem('generalTasks');
    if (this.generalTasks == null) {
      this.generalTasks = [];
    } else {
      return this.generalTasks = JSON.parse(tasksDB)
    }
  }
   
  getEmployees() {
    let generalEmployees: any = localStorage.getItem('employeesDataBase');
    if (this.generalEmployees == null) {
      this.generalEmployees = [];
    } else {
      return this.generalTasks = JSON.parse(generalEmployees)
    }
  }


  // get getTheFront() {
  //   return this.frontEmployee;
  // }
  // get getTheBackEnd() {
  //   return this.backEndEmployee;
  // }
  // get getTheUiUxDesigner() {
  //   return this.uiUxEmployee;
  // }
  // get getTheHr() {
  //   return this.hrEmployee;
  // }

  // setTheFront(s: EmployeeI) {
  //   this.frontEmployee.push(s);
  // }
  // setTheBackEnd(s: EmployeeI) {
  //   this.backEndEmployee.push(s);
  // }
  // setTheUiUxDesigner(s: EmployeeI) {
  //   this.uiUxEmployee.push(s);
  // }
  // setTheHr(s: EmployeeI) {
  //   this.hrEmployee.push(s);
  // }

  // deleteEmployee() {}
  // editEmployeeDetails() {}
}
