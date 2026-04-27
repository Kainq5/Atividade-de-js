let totalAcumulado = 0;

function tabela() {
    var nome = document.getElementById("produto").value;
    var precoInput = document.getElementById("preco").value;
    var preco = parseFloat(precoInput);

    if (nome === "" || isNaN(preco)) {
        alert("Por favor, preencha o nome do produto e um preço válido.");
        return;
    }

    document.getElementById("produto").value = "";
    document.getElementById("preco").value = "";
    
    document.getElementById("tabela_corpo").innerHTML += "<tr><td>" + nome + "</td><td>R$ " + preco.toFixed(2) + "</td></tr>";
    
  
    totalAcumulado += preco;
    document.getElementById("total").innerText = "R$ " + totalAcumulado.toFixed(2);
}