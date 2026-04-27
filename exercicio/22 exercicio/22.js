function verificarAno(){
    var ano = document.getElementById("ano").value;
    if(ano % 4 === 0){
        document.getElementById("resultado").innerHTML = "Ano bissexto";
    }else{
        document.getElementById("resultado").innerHTML = "Não é ano bissexto";
    }
}