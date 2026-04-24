function contadorRegressivo() {
    const numero = document.getElementById("numero").value;
    const result = document.getElementById("result");
    for (let i = numero; i >= 0; i--) {
        result.innerHTML += i + "<br>";
    }
}