import { Component, inject } from '@angular/core';
import { Todo, TodoStatus } from '../model/todo';
import { TodoService } from '../service/todo.service';

import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
    providers: [TodoService],
    standalone: true,
    imports: [FormsModule],
})
export class TodoComponent {
  private todoService = inject(TodoService);

  todos: Todo[] = [];
  todo = new Todo();

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);
  constructor() {
    this.todos = this.todoService.getTodos();
  }
  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
  getTodos() {
    return this.todoService.getTodos();
  }
  getWaitingTodos() {
    return this.todoService.getWaitingTodos();
  }
  getInProgressTodos() {
    return this.todoService.getInProgressTodos();
  }
  getDoneTodos() {
    return this.todoService.getDoneTodos();
  }
  changeStatus(todo: Todo, status: TodoStatus){
    this.todoService.changeStatus(todo, status);
  }
  
}
