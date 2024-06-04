alert("Começando os meus estudos em Javascript");

console.log("Começando os meus estudos em Javascript");

let tabuada = Number(prompt("Digita um número: "))

for (let nu = 0; nu <= 12; nu = nu+1 ){
    let res = (tabuada * nu)
    console.log(`${tabuada} * ${nu} = ${res.toFixed(2)}`)
}