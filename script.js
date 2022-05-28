const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");
const copiarTexto = document.querySelector("btn-copia")

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado
    mensagem.style.backgroundImage="none";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}

function btnDesencriptar() {
    const textoDesencriptar = desencriptar(inputTexto.value);
    mensagem.value = textoDesencriptar
    mensagem.style.backgroundImage="none";
}

function desencriptar(stringDesencriptada) {
    let desencriptarCodigo = [["ai", "a"], ["enter", "e"], ["imes", "i"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0; i < desencriptarCodigo.length; i++) {
        if(stringDesencriptada.includes(desencriptarCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(desencriptarCodigo[i][0], desencriptarCodigo[i][1]);
        }
    }

    return stringDesencriptada
}

function btnCopiar(){
    let textoCopiado = mensagem.value
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado!");
}