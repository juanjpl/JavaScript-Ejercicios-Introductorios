const puntaje = 1000;
const logueado = true;
const edad = 18;
let puntos;

if (puntaje === '1000') {
    console.log('Si, son iguales');
} else {
    console.log('No, son diferentes');
}

if (logueado === '1000') {
    console.log('Si, son iguales');
} else {
    console.log('Inicia sesion');
}

// condicional diferente de ...

if (puntaje != 1000) {
    console.log('No, son diferentes');
} else {

    console.log('Si, son iguales');
}

//usando mayores y menores
if (edad >= 18) {
    console.log('Si, seres mayor de edad ');
} else {
    console.log('No, eres menor de edad');
}

//esta vacia .... comparamos

if (puntos) {
    console.log('Si hay puntos y es de ' + `${puntos}`);
} else {

    console.log('No hay puntos que mostrar.');
}

/*====================================================*/
let dinero = 500;
let totalCarrito = 1000;
let tarjeta = true;

if (dinero > totalCarrito) {
    console.log('Pago Correcto');
} else {
    console.log('Fondos Insuficientes.');
}


if (dinero > totalCarrito) {
    console.log('Pago Correcto');

} else if (tarjeta) {
    console.log('Pago Correcto');
    console.log('Pagaste con tarjeta.')
} else {
    console.log('Fondos Insuficientes.');
}