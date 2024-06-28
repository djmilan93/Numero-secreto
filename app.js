let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`, "El número secreto es menor");
        } else {
            asignarTextoElemento(`p`, "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector(`#valorUsuario`).value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listasNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento(`p`, "Ya se sortearon todos los números posibles");
    } else {
        //Si el número generado esta incluido en la lista
        if (listasNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento(`h1`, "Juego del número secreto!");
    asignarTextoElemento(`p`, `indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de nuevo juego
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

condicionesIniciales();