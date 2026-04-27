function convercaoDolar() {
    const numero = Number(document.getElementById("numero").value);
    const cotacao = Number(document.getElementById("cotacao").value);
    const result = document.getElementById("result");
    const convercao = numero * cotacao;
    result.innerHTML = `O valor em real é ${convercao}`;
}