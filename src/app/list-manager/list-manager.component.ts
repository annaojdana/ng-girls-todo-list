import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
@Component({
  selector: 'app-list-manager',
  template: `

  <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>

  <ul>
    <li *ngFor="let todoItem of todoList">
      <app-todo-item [item]="todoItem"
               (remove)="removeItem($event)"></app-todo-item>
    </li>
  </ul>

`,
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }
  ngOnInit() {
  this.todoList = this.todoListService.getTodoList();
  }
  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
  removeItem(item): void {
  this.todoListService.deleteItem(item);
}
}
