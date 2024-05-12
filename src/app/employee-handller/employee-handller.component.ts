import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { employee } from '../employee';
import { EmployeeI } from '../project_interface';
import { ArrService } from '../arr.service';
@Component({
  selector: 'app-employee-handller',
  templateUrl: './employee-handller.component.html',
  styleUrls: ['./employee-handller.component.scss'],
})
export class EmployeeHandllerComponent implements OnInit {
  constructor(private _ArrService: ArrService) {}
  ngOnInit(): void {
    this.getDefaultData();
  }

  employeeFormGroup = new FormGroup({
    employeeName: new FormControl(null, [
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    category: new FormControl(null, Validators.required),
    email: new FormControl('@gmail.com', Validators.email),
    img: new FormControl(null, Validators.required),

    level: new FormControl(null, [Validators.required]),
    // personalWebsite: new FormControl(null, Validators.maxLength(10)),
    // salary: new FormControl(null, Validators.max(5)),
    // education: new FormControl(null, Validators.maxLength(10)),
  });

  employeesDataBase: EmployeeI[] = [];

  getDefaultData() {
    if (this.getData() == null) {
      this.employeesDataBase = [];
    } else {
      this.employeesDataBase = this.getData();
    }
  }
  submitForm(employeeFormGroup: FormGroup) {
    this.addEmployee();
    this.clearFormControl();
  }

  // createEmployees
  addEmployee() {
    let newEmployee = new employee(
      this.FormControlvalue('employeeName'),
      this.FormControlvalue('email'),
      this.FormControlvalue('img'),
      this.FormControlvalue('level'),
      this.FormControlvalue('category'),
      this.FormControlvalue('personalWebsite'),
      this.FormControlvalue('salary'),
      this.FormControlvalue('education')
    );
    this.pushToDataBase(newEmployee.employeeI);
  }

  // here we get the value of the form controllers.
  FormControlvalue(formControl: any) {
    return this.employeeFormGroup.get(`${formControl}`)?.value;
  }

  //clearing inputs after get value
  clearFormControl() {
    let inputsForms = Array.from(document.querySelectorAll('input'));
    let selectForms = Array.from(document.querySelectorAll('select'));
    inputsForms.forEach((x) => {
      x.value = '';
    }),
      selectForms.forEach((x) => {
        x.value = '';
      });
  }

  // addEmployees
  pushToDataBase(a: EmployeeI) {
    this.getDefaultData();
    this.employeesDataBase.push(a);
    this.setInLocalStorage();
  }

  //setDateInLocalStorage
  setInLocalStorage() {
    localStorage.setItem(
      'employeesDataBase',
      JSON.stringify(this.employeesDataBase)
    );
    // this.employeesDataBase =  this.getData()
    // this.filter()
  }
  // filter(){

  //   for(let i = 0 ;i<this.employeesDataBase.length; i++){

  //      console.log(this.employeesDataBase[i].category )
  //     if(this.employeesDataBase[i].category=='frontend'){
  //       this._ArrService.setTheFront(this.employeesDataBase[i])
  //     }else if(this.employeesDataBase[i].category == 'backend'){

  //       this._ArrService.setTheBackEnd(this.employeesDataBase[i])
  //     }else if(this.employeesDataBase[i].category == 'hr'){

  //       this._ArrService.setTheHr(this.employeesDataBase[i])
  //     }else if(this.employeesDataBase[i].category == 'uiUx'){
  //       this._ArrService.setTheUiUxDesigner(this.employeesDataBase[i])
  //     }
  //   }

  // }

  //getDateFromLocalStorage
  getData() {
    let employeesDataBase = localStorage.getItem('employeesDataBase');
    let parsesD = this.parsesTheDate(employeesDataBase);
    return parsesD;
  }
  parsesTheDate(eD: any) {
    return JSON.parse(eD);
  }

  /***
 (1) (employee)
 Impotant information
 * name
 * category
 * level
 * img
 * mail
 */

  /*
   *  Additional information
   *  experiance
   *  companies Worked With before
   *  technical intervie evaluation
   *  portfolio
   *  salary
   */
}
