import { Component } from '@angular/core';
import { Task } from './task.model'; // Import the Task interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[] = [];
  currentTask: Task = {
    name: '',
    description: '',
    dueDate: new Date(),
    completed: false,
  };
  editingIndex: number | null = null;

  addOrUpdateTask() {
    if (
      this.currentTask.name.trim() !== '' &&
      this.currentTask.description.trim() !== '' &&
      this.currentTask.dueDate
    ) {
      if (this.editingIndex !== null) {
        this.tasks[this.editingIndex] = { ...this.currentTask };
        this.editingIndex = null;
      } else {
        this.tasks.push({ ...this.currentTask });
      }
      this.currentTask = {
        name: '',
        description: '',
        dueDate: new Date(),
        completed: false,
      };
    }
  }

  editTask(task: Task) {
    this.currentTask = { ...task };
    this.editingIndex = this.tasks.indexOf(task);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t !== task);
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }
}
