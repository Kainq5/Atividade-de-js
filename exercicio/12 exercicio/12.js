function numeroSorteado() {
    const numero = document.getElementById("numero").value;
    const result = document.getElementById("result");
    const numeroSorteado = Math.floor(Math.random() * numero) + 1;
    let tentativas = 0;
    if (numeroSorteado !== numero) {
        result.innerHTML = `Esta longe do numero`;
        tentativas++;
        return numeroSorteado;
    } else if (numeroSorteado === numero) {
        result.innerHTML = `Você acertou o numero em ${tentativas} tentativas`;
        return numeroSorteado;
    }
}