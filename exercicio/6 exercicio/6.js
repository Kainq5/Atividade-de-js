function calculosBasicos() {
    const Imput1 = document.getElementById("number1").value;
    const Imput2 = document.getElementById("number2").value;

    const result = document.getElementById("result");

    if (Imput1 == "" || Imput2 == "") {
        result.innerHTML = "Preencha todos os campos";
        return;
    }

    const numero1 = Number(Imput1);
    const numero2 = Number(Imput2);
    
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    const operacao = document.querySelector("select").value;

    if (operacao == "soma") {
        result.innerHTML = `Soma: ${soma}`;
    }
    else if (operacao == "subtracao") {
        result.innerHTML = `Subtracao: ${subtracao}`;
    }
    else if (operacao == "multiplicacao") {
        result.innerHTML = `Multiplicacao: ${multiplicacao}`;
    }
    else if (operacao == "divisao") {
        result.innerHTML = `Divisao: ${divisao}`;
    }
    

    }