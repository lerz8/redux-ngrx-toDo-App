import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[ToDo] Agergar ToDo';

export const TOGGLE_TODO = '[ToDo] Toggle ToDo';

export const CAMBIAR_TODO = '[ToDo] Cambiar Texto ToDo';

export const BORRAR_TODO = '[ToDo] Borrar ToDo';


export class AgregarToDoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {}
}

export class ToggleToDoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: string) {}
}

export class CambiarToDoAction implements Action {
    readonly type = CAMBIAR_TODO;
    constructor(public id: string, public textoNuevo: string) {}
}

export class BorrarToDoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: string) {}
}

export type Acciones =
AgregarToDoAction |
ToggleToDoAction |
BorrarToDoAction |
CambiarToDoAction;




