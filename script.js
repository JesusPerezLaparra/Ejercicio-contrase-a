/*alert("Hola, " + nombre + "!");
let color = prompt("Escribe tu color favorito");

const elemento = document.getElementById("titulo");

elemento.style.background = color;
elemento.innerText = "Hola, " + nombre + "!";*/

const elemento = document.getElementById("contrasenya");

function contraseña() {
    let longitud = elemento.value.length;
    const texto = document.getElementById("texto");
    if (longitud <= 8) {
        texto.innerText = "La contraseña es demasiado corta";
        texto.className = "inferior";
    } else if (longitud > 8 && longitud < 10) {
        texto.innerText = "La contraseña no es del todo segura";
        texto.className = "similar";
    } else {
        texto.className = "superior";
        texto.innerText = "La contraseña es segura";
    }
}

elemento.addEventListener("input", contraseña);
