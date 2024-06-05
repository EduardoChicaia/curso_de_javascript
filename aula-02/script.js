const input = document.querySelector ('#tarefa')
const completa= document.querySelector('.ul-task')
const listaLi = []

function adicionar () {

    listaLi.push({
        tarefa: input.value,
        concluida: false,
        mal: false
    })
    input.value = ''
    mostrar()
    
}
function mostrar(){
    let novaLi= ''
    listaLi.forEach((item, posicao ) =>{
        
        novaLi = novaLi + `
            <li class="list-task ${item.concluida &&"concluirt"|| item.mal &&"mal"}">
                <img src="img/nok.png" alt="ok" onclick="concluir(${posicao})" class="feito">
                <p>${item.tarefa}</p>
                <img src="img/Cheknok.jfif" alt="nok" class="X" onclick="nok(${posicao})">
                <img src="img/deletar.png" alt="deletar" onclick="apagar(${(posicao)})">
            </li>`
          
    })
    completa.innerHTML = novaLi
}
function apagar(posicao){

    listaLi.splice(posicao,1)

    mostrar()
}
function concluir(posicao){
    
    listaLi[posicao].concluida =  !listaLi[posicao].concluida

    mostrar()
}
function nok(posicao){
    
    listaLi[posicao].mal =  !listaLi[posicao].mal

    mostrar()
}
