function semaforo(){
    var cor = document.getElementById("cor");
    cor.value = "vermelho";
    setTimeout(function(){
        cor.value = "amarelo";
    }, 5000);
    setTimeout(function(){
        cor.value = "verde";
    }, 10000);
    setTimeout(function(){
        cor.value = "vermelho";
    }, 15000);
}