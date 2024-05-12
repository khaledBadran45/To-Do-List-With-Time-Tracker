import { ArrService } from './../arr.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks!: object[];
  showTaskMissior: boolean = false;
  Employees!:object []
  constructor(private _ArrService: ArrService) {}
  ngOnInit(): void {
    this.tasks = this._ArrService.getTasks();
   this.Employees = this._ArrService.getEmployees()
   console.log(this.Employees);

  }
}

/**
 * --employee
 * 1-create employee
 * 2-filter by category and leve
 * 3- add the every card the employee
 * how to do that
 * at first
 * tsFile,and anotherComponentHowGoingToHandellingTheEmployee
 *  create a class employee
 * constructor (id,name,img,level,category,personalWebsite,salary,education)
 * setLocalStorage()
 * getLocalStorage()
 * getTheFront()
 * getTheBackEnd()
 * getTheUiUxDesigner()
 * getTheHr()
 * deleteEmployee()
 * editEmployeeDetails()
 */
