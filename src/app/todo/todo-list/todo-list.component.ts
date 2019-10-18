import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToDo } from '../model/todo.model';
import * as FromFiltro from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  toDos: ToDo[] = [];
  filtro: FromFiltro.filtrosValidos;

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {
      this.toDos = state.todos;
      this.filtro = state.filtro;
    });
  }

}
