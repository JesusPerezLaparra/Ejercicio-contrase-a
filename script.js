/*alert("Hola, " + nombre + "!");
let color = prompt("Escribe tu color favorito");

const elemento = document.getElementById("titulo");

elemento.style.background = color;
elemento.innerText = "Hola, " + nombre + "!";*/

const contrasenya = document.getElementById("contraseña");
let longitud;

function contraseña() {
    if (longitud <= 8) {
        elemento.innerText = "La contraseña es demasiado corta";
    } else if (longitud > 8 && longitud < 10) {
        elemento.innerText = "La contraseña no es del todo segura";
    } else {
        longitud <= 10;
        elemento.innerText = "La contraseña es segura";
    }
}
