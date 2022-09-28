const mensajeRecibido = document.querySelector(".texto-area");
const mensajeEncriptado = document.querySelector(".mensaje-final");


function botonEncript() {
    const textoEncript = encriptarMensaje(mensajeRecibido.value);
    mensajeEncriptado.value = textoEncript;
    mensajeEncriptado.style.background = "none";
    mensajeRecibido.value="";
}

function encriptarMensaje(msjEncript){
    let reglasMatriz = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]]
    msjEncript = msjEncript.toLowerCase();

    for(let i=0; i<reglasMatriz.length ;i++){
        if(msjEncript.includes(reglasMatriz[i][0])) {
            msjEncript = msjEncript.replaceAll(reglasMatriz[i][0], reglasMatriz[i][1])
        }
    }
    return msjEncript;
}
//desencriptacion
function botonDesencript() {
    const txtDescript = desencriptarMensaje(mensajeRecibido.value);
    mensajeEncriptado.value = txtDescript;
    mensajeRecibido.value="";
}

function desencriptarMensaje(msjdesEncript){
    let reglasMatriz = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]]
    msjdesEncript = msjdesEncript.toLowerCase();

    for(let i=0; i<reglasMatriz.length ;i++){
        if(msjdesEncript.includes(reglasMatriz[i][1])) {
            msjdesEncript = msjdesEncript.replaceAll(reglasMatriz[i][1], reglasMatriz[i][0])
        }
    }
    return msjdesEncript;
}

function copiar() {
    let textosecreto = mensajeEncriptado.value;
    navigator.clipboard.writeText(textosecreto)
    mensajeEncriptado.value = "";
}