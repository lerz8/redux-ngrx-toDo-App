import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { ToggleAllToDoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  estado = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }

  ToggleAll() {
    this.estado = !this.estado;
    const accion = new ToggleAllToDoAction(this.estado);
    this.store.dispatch(accion);
  }

}
