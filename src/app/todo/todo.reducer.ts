import * as fromTodo from './todo.actions';
import { ToDo } from './model/todo.model';


const toDo1 = new ToDo('Programar en Indra');
const toDo2 = new ToDo('Salvar el Mundo');
const toDo3 = new ToDo('Aprender NGRX');


const estadoInicial: ToDo[] = [toDo1, toDo2, toDo3];

export function toDoReducer( state = estadoInicial, action: fromTodo.Acciones ): ToDo[] {


    switch ( action.type) {

        case fromTodo.AGREGAR_TODO:
            const NUEVO_TODO = new ToDo(action.texto);
            return [...state, NUEVO_TODO];

        case fromTodo.TOGGLE_TODO:

            return state.map( ToDoEdit => {
                if ( ToDoEdit.id === action.id ) {
                    return {
                        ...ToDoEdit,
                        completo: !ToDoEdit.completo
                    };
                } else {
                    return ToDoEdit;
                }
            });


        case fromTodo.CAMBIAR_TODO:
            return state.map( ToDoEdit => {
                if ( ToDoEdit.id === action.id ) {
                    return {
                        ...ToDoEdit,
                        texto: action.textoNuevo
                    };
                } else {
                    return ToDoEdit;
                }
            });

        case fromTodo.TOGGLE_ALL_TODO:
                return state.map( ToDoEdit => {
                   return {
                        ...ToDoEdit,
                        completo: action.estado
                    };
                });


        case fromTodo.BORRAR_TODO:
            return state.filter( BorrarToDo => BorrarToDo.id !== action.id);

        case fromTodo.BORRAR_ALL_TODO:
                return state.filter( BorrarAllToDo => !BorrarAllToDo.completo );

        default:
            return state;
    }


}
