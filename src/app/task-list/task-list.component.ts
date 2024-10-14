import { Component } from '@angular/core';
import { Task } from '../interface/task.interface';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TaskFormComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Tarea 1', description: 'Descripción de tarea 1', completed: false, tag: 'Personal' },
    { id: 2, title: 'Tarea 2', description: 'Descripción de tarea 2', completed: true, tag: 'Trabajo' },
    { id: 3, title: 'Tarea 3', description: 'Descripción de tarea 3', completed: false, tag: 'Urgente' },
  ];

  tags: string[] = ['Personal', 'Trabajo', 'Urgente'];
  selectedTag: string = 'Todos';
  showModal: boolean = false;

  filterTasks(): Task[] {
    if (this.selectedTag === 'Todos') {
      return this.tasks;
    }
    return this.tasks.filter(task => task.tag === this.selectedTag);
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onTaskAdded(task: any) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
    this.closeModal();
  }
}
