var listaDeNomes = [];

function adicionarNome() {
    var entrada = document.getElementById("nome");
    var nome = entrada.value.trim();
    if (nome !== "") {
        listaDeNomes.push(nome);
        listaDeNomes.sort((a, b) => a.localeCompare(b));
        atualizarTela();
        entrada.value = "";
        entrada.focus();
    }
}

function atualizarTela() {
    var result = document.getElementById("result");
    var selectLista = document.getElementById("lista");
    result.innerHTML = "";
    selectLista.innerHTML = '<option value="">Selecione</option>';
    for (var i = 0; i < listaDeNomes.length; i++) {
        result.innerHTML += listaDeNomes[i] + "<br>";
        var novaOpcao = document.createElement("option");
        novaOpcao.text = listaDeNomes[i];
        novaOpcao.value = listaDeNomes[i];
        selectLista.add(novaOpcao);
    }
}


function organizar() {
    listaDeNomes.sort((a, b) => a.localeCompare(b));
    atualizarTela();
}