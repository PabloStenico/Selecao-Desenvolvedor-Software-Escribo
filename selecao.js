var valorDigitado = "";
var soma  = 0;

function calculo(){
    valorDigitado = document.querySelector(".valor").value;
    if(isNaN(valorDigitado)){
        document.querySelector(".resultado").innerHTML = "Digite apenas números interios";
    }else{
    if (valorDigitado % 1 === 0){
        for(i = 1 ; i < valorDigitado; i++ ){
        if(i % 3 === 0 || i % 5 === 0){
            soma = soma + i ;
        }
    }
    document.querySelector(".resultado").innerHTML = soma;
    soma = 0;
    }else{
        document.querySelector(".resultado").innerHTML = "Digite apenas números interios";
        
    }
}
    
}