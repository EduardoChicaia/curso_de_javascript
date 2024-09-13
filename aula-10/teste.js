let cxNome =document.querySelector('#name')

let cxTelef=document.querySelector('#fone')

let cxEmail= document.querySelector('#email')

let cxMorada= document.querySelector('#morada')

let btnEnviar = document.querySelector('#enviar')

let tr= document.querySelector('#try')

btnEnviar.addEventListener('click', function(e){

        let nome = cxNome.value

        let telefone = cxTelef.value

        let email = cxEmail.value

        let cidade = cxMorada.value

        console.log(nome)
        console.log(telefone)
        console.log(email)
        console.log(cidade)

    e.preventDefault();

    let pessoa = {
        nome: nome,
        telefone: telefone,
        email: email,
        cidade: cidade
    }

    console.log(pessoa)

    function testar (){
        
        let borda = ''
        pessoa.forEach(element => {
            borda = borda + ` <td>${pessoa.nome}</td>
            <td>9366666</td>
            <td>Eduardo@gmail.com</td>
            <td>Luanda</td>`
        });

        tr.innerHTML = borda

    }

   
})

