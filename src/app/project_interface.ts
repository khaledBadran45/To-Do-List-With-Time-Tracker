export interface EmployeeI {
  name: string;
  mail: string;
  img: string;
  level: string;
  category: string;
  personalWebsite: string;
  salary: number;
  education: string;
}
export interface TasksI{
  task: string,
  startLine: Date,
  deadLine: Date,
  taskLevel: string,
  taskCategory: string,
  restDaysTDeadLine:number
}
