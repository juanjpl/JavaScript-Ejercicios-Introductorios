//ejercicios numero --< no usamos comillas ""

const numero1 = 30,

    numero2 = "20",
    numero3 = 20.20,
    numero4 = -3;
numero5 = 20;


console.log(numero1);
console.log(numero2);

let resultado;

// suma
resultado = numero1 + numero5;
console.log(resultado);

//resta
resultado = numero1 - numero5;
console.log(resultado);

//multiplicamos 
resultado = numero1 * numero5;
console.log(resultado);

//dividimos
resultado = numero1 / numero5;
console.log(resultado);


// funcion MATH

resultado = Math.round(2.5);
console.log(resultado);

resultado = Math.floor(2.99);
console.log(resultado);

resultado = Math.ceil(2.011);
console.log(resultado);

//raiz cuadrada 

resultado = Math.sqrt(144);
console.log(resultado);

resultado = Math.abs(numero4);
console.log(resultado);

resultado = Math.pow(8, 3);
console.log(resultado);

resultado = Math.min(10, 2, 4, 60, 5);
console.log(resultado);

resultado = Math.max(10, 2, 4, 60, 5);
console.log(resultado);

resultado = (20 + 30) * 2;
console.log(resultado);

//===============================================

let puntaje = 0;
console.log(`${puntaje}`);

// diferentes formas de incremetar valores

puntaje++;
console.log(`${puntaje}`);

++puntaje;
console.log(`${puntaje}`);

puntaje = puntaje + 5;
console.log(`${puntaje}`);

puntaje += 5;
console.log(`${puntaje}`);

puntaje += 3;
console.log(`${puntaje}`);

puntaje++;
console.log(`${puntaje}`);

// igualmente formas de decrementos

puntaje--;
console.log(`${puntaje}`);

--puntaje;
console.log(`${puntaje}`);

puntaje -= 5;
console.log(`${puntaje}`);


// ejemplos con carrito de compras 

let carrito = 0;
console.log(`${carrito}`);

carrito += 20;
console.log(`${carrito}`);

carrito += 30;
console.log(`${carrito}`);

carrito += 100;
console.log(`${carrito}`);