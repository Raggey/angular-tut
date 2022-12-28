import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks)); // observable - async
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(
      // Filter out deleted taskID from UI
      () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
    );
  }
}
