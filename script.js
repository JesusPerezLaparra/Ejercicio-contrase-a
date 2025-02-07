/*alert("Hola, " + nombre + "!");
let color = prompt("Escribe tu color favorito");
const elemento = document.getElementById("titulo");
elemento.style.background = color;
elemento.innerText = "Hola, " + nombre + "!";*/

const elemento = document.getElementById("contrasenya");
const nickName = document.getElementById('nick');
const botonLogin = document.getElementById('login');
botonLogin.setAttribute("disabled","true");
let pass_ok = false;

function contraseña() {
    let longitud = elemento.value.length;
    let longitudNick = nickName.value.length;
    const texto = document.getElementById("texto");
    if (longitud < 8) {
        texto.innerText = "La contraseña es demasiado corta";
        texto.className = "inferior";
        pass_ok = false;
        botonLogin.setAttribute('disabled', "true");
        botonLogin.className = "";
    } else if (longitud >= 8 && longitud <= 10) {
        texto.innerText = "La contraseña no es del todo segura";
        texto.className = "similar";
        pass_ok = false;
        botonLogin.setAttribute('disabled', "true");
        botonLogin.className = "";
    } else {
        texto.className = "superior";
        texto.innerText = "La contraseña es segura";
        pass_ok = true;
        if(longitudNick != 0){
            botonLogin.removeAttribute('disabled')
            botonLogin.className = "button_style";
        }
    }
}

function check_nick(){

    let longitudNick = nickName.value.length;
    if (pass_ok && longitudNick != 0){
        botonLogin.removeAttribute('disabled'); 
        botonLogin.className = "button_style";
    }else{
        botonLogin.setAttribute('disabled', "true");
        botonLogin.className = "";
    }
}

function validar(){
    let texto = nickName.value;
    alert("Login: " + texto);
}

elemento.addEventListener("input", contraseña);
nickName.addEventListener("input", check_nick);
botonLogin.addEventListener('click', validar);

