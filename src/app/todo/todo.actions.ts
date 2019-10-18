import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[ToDo] Agergar ToDo';

export const TOGGLE_TODO = '[ToDo] Toggle ToDo';

export const CAMBIAR_TODO = '[ToDo] Cambiar Texto ToDo';

export const BORRAR_TODO = '[ToDo] Borrar ToDo';

export const BORRAR_ALL_TODO = '[ToDo] Borrar All ToDo';

export const TOGGLE_ALL_TODO = '[ToDo] Toggle All ToDo';


export class AgregarToDoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor(public texto: string) {}
}

export class ToggleToDoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor(public id: string) {}
}


export class ToggleAllToDoAction implements Action {
    readonly type = TOGGLE_ALL_TODO;
    constructor(public estado: boolean) {}
}

export class CambiarToDoAction implements Action {
    readonly type = CAMBIAR_TODO;
    constructor(public id: string, public textoNuevo: string) {}
}

export class BorrarToDoAction implements Action {
    readonly type = BORRAR_TODO;
    constructor(public id: string) {}
}


export class BorrarAllToDoAction implements Action {
    readonly type = BORRAR_ALL_TODO;
}
export type Acciones =
AgregarToDoAction |
ToggleToDoAction |
ToggleAllToDoAction |
BorrarToDoAction |
BorrarAllToDoAction |
CambiarToDoAction;




