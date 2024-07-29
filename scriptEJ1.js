let nombreCompleto = document.querySelector("#nombre");
let asunto = document.querySelector("#asunto");
let mensaje = document.querySelector("#mensaje");
let reNombre = new RegExp("^[a-zA-Z á-ñ Á-Ñ]+$");

let boton = document.querySelector("#botton");

function validarNombre(){
    let errorN = document.querySelector(".errorNombre");
    if (reNombre.test(nombreCompleto.value)){
        console.log("Valor ingresado correctamente")
        errorN.innerHTML = "";
        return true;
    }
    else {
        console.log("valor ingresado mal")
       
        errorN.innerHTML = "Nombre es Requerido";
        
        return false;
        
    }
    
}
function asuntoF(){
    let errorA = document.querySelector(".errorAsunto");
    if (reNombre.test(asunto.value)){
        console.log("Valor ingresado correctamente")
        errorA.innerHTML = "";
        return true;
    }
    else {
        console.log("valor ingresado mal")
       
        errorA.innerHTML = "Asunto requerido";
        
        return false;
        
    }
    
}
function mensajeF(){
    let errorM = document.querySelector(".errorMensaje");
    if (reNombre.test(mensaje.value)){
        console.log("Valor ingresado correctamente")
        errorM.innerHTML = "";
        return true;
    }
    else {
        console.log("valor ingresado mal")
       
        errorM.innerHTML = "Mensaje requerido";
        
        return false;
    }
    
}
function validarFormulario() {
    let nombreValido = validarNombre();
    let asuntoValido = asuntoF();
    let mensajeValido = mensajeF();
    let resultadoValido = document.querySelector(".resultado")
    
    if (nombreValido && asuntoValido && mensajeValido) {
        resultadoValido.innerHTML = "<p> Mensaje Enviado!!! </p>"
    }
}

boton.addEventListener("click", validarFormulario);


