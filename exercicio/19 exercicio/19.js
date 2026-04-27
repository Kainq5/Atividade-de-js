function espacovazio(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    if(nome == "" || email == "" || mensagem == ""){
        document.getElementById("resultado").value = "Preencha todos os campos";
    }else{
        document.getElementById("resultado").value = "Formulário enviado com sucesso";
    }
}