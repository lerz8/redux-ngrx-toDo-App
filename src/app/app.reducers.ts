import { ToDo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as FromToDo from './todo/todo.reducer';
import * as fromFiltro from './filter/filter.reducer';
import * as fromFiltroActions from './filter/filter.actions';


export interface AppState {

    todos: ToDo[];
    filtro: fromFiltroActions.filtrosValidos;
}

export const REDUCERS: ActionReducerMap<AppState> = {
    todos : FromToDo.toDoReducer,
    filtro : fromFiltro.filtroReducer
};
