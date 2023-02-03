const txtArea= document.getElementById('txtEncriptar')
const txtMensaje= document.getElementById('txtMensaje')

//convertir
//a -ai
//e - enter
//i - imes
//o - ober
//u - ufat
let matrizDatos = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
function btnEncriptar() {
    const textoEncripado = encriptar(txtArea.value)
    console.log(encriptar(txtArea.value))
    txtMensaje.value = textoEncripado
    console.table(matrizDatos)
    txtArea.value=''

}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(txtArea.value)
    console.log(desencriptar(txtArea.value))
    txtMensaje.value = textoDesencriptado

}

function btnCopiar(){
    const textoCopiado=txtMensaje.value;
    txtArea.value=textoCopiado
    console.log(textoCopiado)
    txtMensaje.value=''

}



function encriptar(textoEncriptado) {
    textoEncriptado = textoEncriptado.toLowerCase()
    let matrizDatos = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
   
    for(let i=0;i<matrizDatos.length;i++){
        if(textoEncriptado.includes(matrizDatos[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(matrizDatos[i][0],matrizDatos[i][1])
            }
    }

    return textoEncriptado

}

function desencriptar(Desencriptado) {
    Desencriptado = Desencriptado.toLowerCase();
    let matrizDatos = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    for(let y=0;y<matrizDatos.length;y++){
        Desencriptado=Desencriptado.replaceAll(matrizDatos[y][1],matrizDatos[y][0])
    }

   
    return Desencriptado

}

