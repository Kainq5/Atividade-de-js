function cadastrar() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const email = document.getElementById("email").value;
    const result = document.getElementById("result");
    result.innerHTML = `Nome: ${nome}, Idade: ${idade}, Email: ${email}`;
    return result;
    
}