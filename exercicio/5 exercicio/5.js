function calcularmedia() {

    var Nota1 = Number(document.getElementById("nota").value);
    var Nota2 = Number(document.getElementById("nota2").value);
    var Nota3 = Number(document.getElementById("nota3").value);
    
    var resultado = document.getElementById("resultado");
    var media = (Nota1 + Nota2 + Nota3) / 3;

    if (media >= 6) {
        resultado.innerHTML = "Média: " + media.toFixed(1) + " - Aprovado";
    } else {
        resultado.innerHTML = "Média: " + media.toFixed(1) + " - Reprovado";
    }
}
