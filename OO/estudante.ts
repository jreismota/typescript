import { Pessoa } from "./pessoa";

export class Estudante extends Pessoa {

    public ra: string;

    constructor(nome: string) {
        super(nome);
    }

    public mostrarIdade(idade: number) {
        console.log("estudante...")
        super.mostrarIdade(idade);
    }


}