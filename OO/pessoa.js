"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(nome) {
        this.nome = nome;
    }
    Pessoa.prototype.mostrarIdade = function (idade) {
        console.log(this.nome + " tem " + idade + " anos de idade");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=pessoa.js.map