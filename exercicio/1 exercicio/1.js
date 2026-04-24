function tabuada(){
    const num = document.getElementById("number1").value;
    const result = document.getElementById("result2");


    let numero = Number(num);
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        console.log("ok")
        tabuada += `${numero} x ${i} = ${numero * i}<br>`;
    }
    result.innerHTML=tabuada;

}

