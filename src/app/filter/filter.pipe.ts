import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../todo/model/todo.model';
import * as FromFiltro from '../filter/filter.actions';

@Pipe({
  name: 'filterToDo'
})
export class FilterPipe implements PipeTransform {

  transform(toDos: ToDo[], filtro: FromFiltro.filtrosValidos): ToDo[] {

    switch (filtro){
      case 'completados':
        return toDos.filter( todo => todo.completo );
      case 'pendientes' :
        return toDos.filter( todo => !todo.completo);
      default :
      return toDos;
    }
  }

}
