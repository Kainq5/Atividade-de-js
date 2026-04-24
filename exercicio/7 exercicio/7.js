function parOuImpar() {
    const numero = Number(document.getElementById("numero").value);
    const result = document.getElementById("result");
    if (numero % 2 === 0) {
        result.innerHTML = "Par";
    } else {
        result.innerHTML = "Impar";
    }
}