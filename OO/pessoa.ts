export class Pessoa {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public mostrarIdade(idade: number) {
        console.log(`${this.nome} tem ${idade} anos de idade`);
    }
}