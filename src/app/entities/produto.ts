export class Produto {
    id: number = 0;
    codigo: string = "";
    nome: string = "";
    quantidade: number = 0;

    constructor(id: number = 0, codigo: string = "", nome: string = "", quantidade: number = 0) {
        this.id = id;
        this.codigo = codigo;
        this.nome = nome;
        this.quantidade = quantidade;
    }
}
