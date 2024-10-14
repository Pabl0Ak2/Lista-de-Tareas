import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<any>();
  @Output() closeModal = new EventEmitter<void>();

  tags: string[] = ['Personal', 'Trabajo', 'Urgente'];
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  newTaskTag: string = this.tags[0];

  addTask() {
    if (this.newTaskTitle.trim() && this.newTaskDescription.trim()) {
      const newTask = {
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        completed: false,
        tag: this.newTaskTag
      };
      this.taskAdded.emit(newTask);
      this.resetForm();
    }
  }

  resetForm() {
    this.newTaskTitle = '';
    this.newTaskDescription = '';
    this.newTaskTag = this.tags[0];
  }

  close() {
    this.closeModal.emit();
  }
}
