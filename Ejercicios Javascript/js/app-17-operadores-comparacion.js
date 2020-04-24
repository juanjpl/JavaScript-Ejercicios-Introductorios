let dinero = 500;
let totalCarrito = 1000;
let tarjeta = false;

if (dinero > totalCarrito) {
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes.');
}



//afirmativo si se cumple una de ambas condiciones
if (dinero > totalCarrito || tarjeta) {
    console.log('Pago Correcto');
    console.log('Pagaste con tarjeta.');

} else {
    console.log('Fondos Insuficientes.');
}

//afirmativo si se cumplen todas las condiciones 

let hora = 14;

if (hora >= 0 && hora <= 12) {
    console.log('Buenos Dias');
} else if (hora > 12 && hora <= 18) {
    console.log('Buenas Tardes');
} else if (hora > 18 && hora <= 24) {
    console.log('Buenas Noches');
} else {
    console.log('Horario Invalido');
}


// Ternario 

let login = false;
console.log(login ? 'Si se ha logueado' : 'No se logueó');

login = true;
console.log(login ? 'Si se ha logueado' : 'No se logueó');

// puntos

let puntosNuevos;

if (puntosNuevos) {
    console.log('Si hay puntaje');
} else {
    console.log('No hay puntaje');
}