

class Pessoa
{

    // atributos da class

    _nome
    _idade
    _altura
    _peso
    _imc

    //Metodo construtor

    constructor (nome, idade, altura, peso) {

        this._nome   = nome
        this._idade  = idade
        this._altura = altura
        this._peso   = peso
        this._imc    = (this._peso/(this._altura * this._altura).toFixed(2))
    }


    // Get metodo para pegar uma informação do  atributo

    get nome () {
        return this._nome
    }

    // Set metodo para configurar, editar ou alterar uma informação do atributo

    set nome (novoNome) {
        return this._nome = novoNome
    }
}

let pessoa1 = new Pessoa('Edward', 34, 1.97, 72)

console.log(pessoa1)

console.log(pessoa1.nome)

pessoa1.nome= 'Mario'

console.log(pessoa1.nome)