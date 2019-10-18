import { Component, OnInit } from '@angular/core';
import * as fromToDo from '../../todo/todo.actions';
import * as fromFiltro from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToDo } from '../model/todo.model';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroSeleccionado: fromFiltro.filtrosValidos;
  pendientes: number;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.filtroSeleccionado = state.filtro;
      this.pendientes = this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: fromFiltro.filtrosValidos) {
    const accion = new fromFiltro.SetFiltroAction(filtro);
    this.store.dispatch(accion);

  }

  contarPendientes(todos: ToDo[]): number {
    return this.pendientes = todos.filter(toDo => !toDo.completo).length;
  }

  LimpiarCompletados() {
    const accion = new fromToDo.BorrarAllToDoAction();
    this.store.dispatch(accion);
  }

}
