/*alert("Hola, " + nombre + "!");
let color = prompt("Escribe tu color favorito");
const elemento = document.getElementById("titulo");
elemento.style.background = color;
elemento.innerText = "Hola, " + nombre + "!";*/

const elemento = document.getElementById("contrasenya");
const nickName = document.getElementById('nick');
const botonLogin = document.getElementById('login');
botonLogin.setAttribute("disabled","true");

function contraseña() {
    let longitud = elemento.value.length;
    let longitudNick = nickName.value.length;
    const texto = document.getElementById("texto");
    if (longitud <= 8 && longitudNick == 0) {
        texto.innerText = "La contraseña es demasiado corta";
        texto.className = "inferior";
        botonLogin.setAttribute('disabled', "true");
    } else if (longitud > 8 && longitud < 10 && longitudNick == 0) {
        texto.innerText = "La contraseña no es del todo segura";
        texto.className = "similar";
        botonLogin.setAttribute('disabled', "true");
    } else {
        texto.className = "superior";
        texto.innerText = "La contraseña es segura";
        console.log(longitudNick)
        if(longitudNick != 0){
            botonLogin.removeAttribute('disabled')
        }
    }
}

function check_nick(){
    let longitud = elemento.value.length;
    let longitudNick = nickName.value.length;
    if (longitud > 10 && longitudNick != 0){
        botonLogin.removeAttribute('disabled') 
    }else{
        botonLogin.setAttribute('disabled', "true");
    }
}

function validar(){
    alert("Texto");
}

elemento.addEventListener("input", contraseña);
nickName.addEventListener("input", check_nick);
botonLogin.addEventListener('click', validar);
