function verificarNumero(){
    var numero = document.getElementById("numero").value;
    var resultado = document.getElementById("resultado");

    if(numero > 0){
        resultado.value = "Positivo";
    }else if(numero < 0){
        resultado.value = "Negativo";
    }else{
        resultado.value = "Zero";
    }
}
