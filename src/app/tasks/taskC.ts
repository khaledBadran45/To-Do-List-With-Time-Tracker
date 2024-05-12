import { TasksI } from '../project_interface';

export class taskCreator {
  taskInfo!: TasksI;
  constructor(
    task: string,
    startLine: Date,
    deadLine: Date,
    taskLevel: string,
    taskCategory: string,
    restDaysTDeadLine: number
  ) {
    this.taskInfo = {
      task: task,
      startLine: startLine,
      deadLine: deadLine,
      taskLevel: taskLevel,
      taskCategory: taskCategory,
      restDaysTDeadLine: restDaysTDeadLine,
    };
  }
}
