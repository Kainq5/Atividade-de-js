function gerarSenha(){
    var numero = document.getElementById("numero").value;
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var senha = "";
    for (var i = 0; i < numero; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById("senha").value = senha; 
}