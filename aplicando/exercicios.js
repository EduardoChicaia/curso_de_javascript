let produtos = [...'oleo', 'açucar', 'Arroz', 'Sabão']

console.log(produtos)

//Adicionando elemento no final da array USANDO o metodo PUSH

produtos.push('Feijão', 'ccafé')

console.log(produtos)

//Removendo elemento no final da array usando metodo POP

produtos.pop()

console.log(produtos)

//Adicionando elemento no inicio da array USANDO o metodo UNSHIFT

produtos.unshift ('Batata', 'Tomate')

console.log(produtos)

//Removendo elemento no inicio da array usando metodo Shift

produtos.shift()

console.log(produtos)

//Para remover um elemento em uma posição especificada usamos o metodo SPLICE

let morango = produtos.splice()

//para copiar a array usamos o metodo SLICE

let mar = produtos.slice(1,3)

//Para saber o tamanho da aarray usamos o metodo length

console.log(produtos.length)

// O metodod (...) SPREED operador é usada para espalhar a array ou seja aumentando mais elementos 

let teste = [...produtos, 'Cana', 'Dendem', 'Tamarino']

// Usando OBJECTO

let pessoa = {
    nome: 'Edward',
    idade: 34,
    altura: 1.9,
    peso: 72
}


// Adicionando mais uma propriedade ou atributo ao objecto

pessoa.sexo= 'M'