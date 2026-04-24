function calcularIMC() {
const peso = document.getElementById("peso").value;
const altura = document.getElementById("altura").value;
const resultado = document.getElementById("resultado");

if (peso == "" || altura == "") {
    resultado.innerHTML = "Preencha todos os campos";
    return;
}

const imc = peso / (altura * altura);

if (imc < 18.5) {
    resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Abaixo do peso`;
}
else if (imc >= 18.5 && imc < 24,9) {
    resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Peso normal`;
}
else if (imc >= 25 && imc < 29,9) {
    resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Sobrepeso`;
}
else {
    resultado.innerHTML = `IMC: ${imc.toFixed(2)} - Obesidade`;
}
}
