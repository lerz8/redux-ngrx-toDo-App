export class ToDo {
    public id: string;
    public texto: string;
    public completo: boolean;

    constructor(texto: string) {
        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
        this.completo = false;
        this.id = Math.random() + '-' + Math.random();
    }
}
