function data(){
    var data = document.getElementById("data").value;
    var dataFormatada = new Date(data);
    var diaDaSemana = dataFormatada.getDay();
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    document.getElementById("resultado").value = diasDaSemana[diaDaSemana];
}   