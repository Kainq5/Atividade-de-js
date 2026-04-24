function calcular() {
    var valorString = document.getElementById("valor").value;
    var result = document.getElementById("result");
    var valor = Number(valorString);
    if (valorString === "") {
        result.innerHTML = "Por favor, digite um valor.";
        return;
    }

    if (valor >= 500) {
        result.innerHTML = `O desconto é de 20% e o valor com desconto é R$ ${(valor - (valor * 20 / 100)).toFixed(2)}`;
    } else if (valor >= 100) {
        result.innerHTML = `O desconto é de 10% e o valor com desconto é R$ ${(valor - (valor * 10 / 100)).toFixed(2)}`;
    } else {
        result.innerHTML = `Valor menor que R$ 100,00. Sem desconto. Total é R$ ${valor.toFixed(2)}`;
    }
}