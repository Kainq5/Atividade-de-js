let timerInterval;
let tempoAtual = 0;
let rodando = false;

function iniciar() {
    if (rodando) return;

    var inputTempo = parseInt(document.getElementById("tempo").value);
    var result = document.getElementById("result");

    if (tempoAtual === 0) {
        if (isNaN(inputTempo) || inputTempo <= 0) {
            result.innerHTML = "Tempo inválido";
            return;
        }
        tempoAtual = inputTempo;
    }

    rodando = true;
    result.innerHTML = `Tempo: ${tempoAtual}`;

    timerInterval = setInterval(function() {
        tempoAtual--;
        result.innerHTML = `Tempo: ${tempoAtual}`;
        if (tempoAtual <= 0) {
            clearInterval(timerInterval);
            rodando = false;
            tempoAtual = 0;
            result.innerHTML = "Tempo esgotado!";
        }
    }, 1000);
}

function pausar() {
    clearInterval(timerInterval);
    rodando = false;
}

function resetar() {
    clearInterval(timerInterval);
    rodando = false;
    tempoAtual = 0;
    document.getElementById("tempo").value = "";
    document.getElementById("result").innerHTML = "";
}
