class Pessoa {
    _nome
    _idade
    _peso
    _altura
    _imc
    
    constructor(nome, idade, peso, altura, imc){

        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura

        this._imc    = this._peso/(this._altura * this._altura)


    }

    //pegar os valuer

    inputs (){

        this._nome = document.querySelector('#nome')

        this._nome.value.push()

        console.log(this._nome)
    }
    get nome (){
        return this._nome
    }

}

let enviar = document.querySelector ('#enviar')

enviar.addEventListener('click', function(e){

    e.preventDefault()

})



 