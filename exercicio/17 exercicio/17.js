function converter() {
    var valorOrigem = parseFloat(document.getElementById("valorOrigem").value);
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;
    var unidadeDestino = document.getElementById("unidadeDestino").value;
    if (isNaN(valorOrigem)) {
        document.getElementById("resultado").value = "Insira um número!";
        return;
    }
    var valorEmCelsius;
    if (unidadeOrigem === "celsius") {
        valorEmCelsius = valorOrigem;
    } else if (unidadeOrigem === "fahrenheit") {
        valorEmCelsius = (valorOrigem - 32) * 5/9;
    } else if (unidadeOrigem === "kelvin") {
        valorEmCelsius = valorOrigem - 273.15;
    }
    var resultadoFinal;
    if (unidadeDestino === "celsius") {
        resultadoFinal = valorEmCelsius;
    } else if (unidadeDestino === "fahrenheit") {
        resultadoFinal = (valorEmCelsius * 9/5) + 32;
    } else if (unidadeDestino === "kelvin") {
        resultadoFinal = valorEmCelsius + 273.15;
    }
    document.getElementById("resultado").value = resultadoFinal.toFixed(2);
}
