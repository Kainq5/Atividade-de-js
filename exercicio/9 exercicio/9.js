function avaliadorDeSenhas() {
    const senha = document.getElementById("numero").value;
    const result = document.getElementById("result");
    if (senha.length < 8) {
        result.innerHTML = "Senha fraca";
    } else {
        result.innerHTML = "Senha forte";
    }
}