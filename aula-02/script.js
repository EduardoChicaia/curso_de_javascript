const input = document.querySelector ('#tarefa')
const completa= document.querySelector('.ul-task')
const listaLi = []

function adicionar () {

    listaLi.push( input.value)
    input.value = ''
    mostrar()
    
}
function mostrar(){
    let novaLi= ''
    listaLi.forEach((item, posicao ) =>{
        
        novaLi = novaLi + `
            <li class="list-task">
                <img src="img/nok.png" alt="ok" onclick="concluir(${posicao})" class="feito">
                <p>${item}</p>
                <img src="img/Cheknok.jfif" alt="nok" class="X">
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
    
    let feito = document.querySelector('.feito')
    feito.classList.toggle('concluir', posicao)

}