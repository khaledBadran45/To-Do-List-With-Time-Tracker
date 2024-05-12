import { EmployeeI } from './project_interface';
export class employee {
  employeeI: EmployeeI
  employeesDataBase: EmployeeI[] = [];
  constructor(
    name: string,
    mail: string,
    img: string,
    level: string,
    category: string,
    personalWebsite: string,
    salary: number,
    education: string
  ) {
    this.employeeI = {
      name: name,
      mail: mail,
      img: img,
      level: level,
      category: category,
      personalWebsite: personalWebsite,
      salary: salary,
      education: education,
    };
  }




  getTheFront() { };
  getTheBackEnd() { };
  getTheUiUxDesigner() { };
  getTheHr() { };
  getAll() { };
  deleteEmployee() { };
  editEmployeeDetails() { };
}
