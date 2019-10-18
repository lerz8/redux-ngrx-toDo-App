import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToDo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  toDos: ToDo[] = [];
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.toDos = state.todos;
    });
  }

}
