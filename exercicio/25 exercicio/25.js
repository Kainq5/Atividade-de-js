let linhaEmEdicao = null;

function salvar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || senha === "") {
        alert("Preencha todos os campos!");
        return;
    }
    if (linhaEmEdicao) {
        linhaEmEdicao.cells[0].innerText = nome;
        linhaEmEdicao.cells[1].innerText = email;
        linhaEmEdicao.cells[2].innerText = senha;

        linhaEmEdicao = null;
        document.getElementById("btnSalvar").innerText = "Cadastrar";
    } else {
        adicionarLinhaNaTabela(nome, email, senha);
    }

    limparCampos();
}

function adicionarLinhaNaTabela(nome, email, senha) {
    const tbody = document.getElementById("tabela_corpo");

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${nome}</td>
        <td>${email}</td>
        <td>${senha}</td>
        <td>
            <button onclick="editar(this)">Editar</button>
            <button onclick="excluir(this)">Excluir</button>
        </td>
    `;

    tbody.appendChild(tr);
}

function editar(botao) {
    linhaEmEdicao = botao.parentElement.parentElement;

    document.getElementById("nome").value = linhaEmEdicao.cells[0].innerText;
    document.getElementById("email").value = linhaEmEdicao.cells[1].innerText;
    document.getElementById("senha").value = linhaEmEdicao.cells[2].innerText;

    document.getElementById("btnSalvar").innerText = "Salvar Edição";
}

function excluir(botao) {
    if (confirm("Tem certeza que deseja excluir este cadastro?")) {
        const linha = botao.parentElement.parentElement;
        linha.remove();

        if (linhaEmEdicao === linha) {
            limparCampos();
            linhaEmEdicao = null;
            document.getElementById("btnSalvar").innerText = "Cadastrar";
        }
    }
}

function limparCampos() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
}
