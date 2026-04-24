function informacoesDeTextos() {
    const texto = document.getElementById("texto").value;
    const result = document.getElementById("result");
    let maiusculas = 0;
    let minusculas = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] >= "A" && texto[i] <= "Z") {
            maiusculas++;
        } else if (texto[i] >= "a" && texto[i] <= "z") {
            minusculas++;
        }
    } 
    
    result.innerHTML =  `O texto tem ${texto.length} caracteres <br>`;
    result.innerHTML += `O texto tem ${maiusculas} Letras maiúsculas <br>`;
    result.innerHTML += `O texto tem ${minusculas} Letras minúsculas <br>`;
    
    
    const quantidadePalavras = texto.trim() === "" ? 0 : texto.trim().split(" ").length;
    result.innerHTML += `O texto tem ${quantidadePalavras} Palavras`;

} 

 

  

