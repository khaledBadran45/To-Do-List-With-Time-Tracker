import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArrService } from '../arr.service';
import { taskCreator } from '../tasks/taskC';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDOComponent implements OnInit {
  constructor(private _ArrService: ArrService) {}
  tasks: object[] = [];
  ngOnInit(): void {
   this.getTasksFs()
  }
  getTasksFs(){
    this.tasks =  this._ArrService.getTasks();
  }

  form: FormGroup = new FormGroup({
    taskInput: new FormControl(null, Validators.required),
    startLine: new FormControl(null, Validators.required),
    deadLine: new FormControl(null, Validators.required),
    taskLevel: new FormControl('All', Validators.required),
    taskCategory: new FormControl('All', Validators.required),
  });

  onSubmit(taskInput: HTMLInputElement, form: FormGroup) {
    this.creatTask(
      form.controls['taskInput'].value,
      form.controls['startLine'].value,
      form.controls['deadLine'].value,
      form.controls['taskLevel'].value,
      form.controls['taskCategory'].value,
      this.returnRestDays()
    );
    this.getTasksFs()
    this.clear(taskInput);
  }
  returnRestDays() {
    let startLine: any = new Date(this.form.controls['startLine'].value),
     deadLine: any = new Date(this.form.controls['deadLine'].value);
    const diffTime = Math.abs(startLine - deadLine);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  creatTask(
    task: string,
    startLine: Date,
    deadLine: Date,
    taskLevel: string,
    taskCategory: string,
    restDaysTDeadLine: number
  ) {
    let cNewTask = new taskCreator(
      task,
      startLine,
      deadLine,
      taskLevel,
      taskCategory,
      restDaysTDeadLine
    );
    
    this.insertData(cNewTask.taskInfo);
  }
  insertData(cNewTask: Object) {
    this._ArrService.setData(cNewTask);
  }
  clear(taskInput: HTMLInputElement) {
    taskInput.value = '';
  }
}
