
function contagem (a) {

    var cont = a;

    setInterval(function(){

        if (cont > 0){
            cont = cont -1
            document.querySelector('.numero').innerHTML= cont;
        }
    }, 1000)
}

function red (){
    contagem (10)
    var red = document.getElementById('red');
    red.style.backgroundColor="red"
    document.querySelector('.numero').style.color ="red"
    setTimeout(function(){
        red.style.backgroundColor="rgba(195, 10, 10, 0.428)";
        green()
    },11000)
}

function yellow (){

    contagem (9)
    
    var yellow= document.getElementById('yellow');
    var amarelo = setInterval(function(){
        yellow.style.backgroundColor="yellow"
        document.querySelector('.numero').style.color= "yellow"
        setTimeout(function(){
            yellow.style.backgroundColor="rgba(149, 149, 14, 0.485)";
        },500)
    },1000)
    setTimeout(function(){
        yellow.style.backgroundColor="rgba(149, 149, 14, 0.485)";
        clearInterval(amarelo)
        red()
    },9000)
}

function green (){
    contagem (10)
    var green = document.getElementById('green')
    green.style.backgroundColor="green"
    document.querySelector('.numero').style.color= "green"
    setTimeout(function(){
        green.style.backgroundColor="rgba(9, 120, 9, 0.472)"
        yellow()
    },11000)

}
green()
