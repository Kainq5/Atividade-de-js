function idade() {
    const idade = document.getElementById("idade").value;
    const resultado = document.getElementById("resultado");

    if (idade == "") {
        resultado.innerHTML = "Preencha todos os campos";
        return;
    }

    if (idade >= 0 && idade <= 12) {
        resultado.innerHTML = "Voce e criança";
    }
    else if (idade >= 13 && idade <= 17) {
        resultado.innerHTML = "Voce e adolescente";
    }
    else if (idade >= 18 && idade <= 59) {
        resultado.innerHTML = "Voce e adulto";
    }
    else if (idade >= 60) {
        resultado.innerHTML = "Voce e idoso";
    }
}