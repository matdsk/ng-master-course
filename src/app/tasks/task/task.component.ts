import { Component, inject, input } from '@angular/core';
import { type Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();

  private tasksService = inject(TasksService);

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task().id);
  }
}
