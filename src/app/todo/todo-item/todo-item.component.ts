import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ToDo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { ToggleToDoAction, CambiarToDoAction, BorrarToDoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {


  @ViewChild('CajaFisicaRef', {static: true}) textFisico: ElementRef;
  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;
  @Input() miToDo: ToDo ;
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.miToDo.completo);
    this.txtInput = new FormControl(this.miToDo.texto, Validators.required);
    // console.log(this.miToDo);

    this.chkField.valueChanges.subscribe( () => {
      const accion = new ToggleToDoAction(this.miToDo.id);
      this.store.dispatch( accion );
    });

  }



  habilitarCaja() {
    this.editando = true;
    setTimeout(() => {
      this.textFisico.nativeElement.select();
    }, 1 );
  }

  DeshabilitarCaja() {
    this.editando = false;

    if ( this.txtInput.invalid || this.txtInput.value === this.miToDo.texto) {
      this.txtInput.setValue(this.miToDo.texto);
      return;
    }
    const accion = new CambiarToDoAction( this.miToDo.id, this.txtInput.value );
    this.store.dispatch(accion);
  }

  BorrarToDo() {
    const accion = new BorrarToDoAction ( this.miToDo.id);
    this.store.dispatch(accion);
  }


}
