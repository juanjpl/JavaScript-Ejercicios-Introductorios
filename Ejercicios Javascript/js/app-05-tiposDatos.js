// tipos de datos 

let numero1 = 50;
numero2 = "10";
numero3 = "tres",
    numero4 = 20.20;

console.log(`${numero1} + ${numero2}`);
console.log(`${numero1} - ${numero2}`);

console.log(numero1 + numero2);
console.log(numero1 - numero2);

// pasaremos numeros a string y viceversa


//numero transforma el texto a numero
console.log(Number(numero2) + numero1);


//parseint... ideal para numeros enteros
console.log(parseInt(numero2) + numero1);

console.log(parseInt(numero4) + numero1);

//usamos los decimales

console.log(parseFloat(numero4) + numero1);

// no es un numero

console.log(Number(numero3));

// datos

let dato;

dato = Number("20");
console.log(`${dato}`);

dato = Number("20.20");
console.log(`${dato}`);

dato = Number("-20.20");
console.log(`${dato}`);

dato = Number(true);
console.log(`${dato}`);

dato = Number(false);
console.log(`${dato}`);

dato = Number(null);
console.log(`${dato}`);

dato = Number("Hola Mundo!");
console.log(`${dato}`);

dato = Number([1, 2, 3, 4]);
console.log(`${dato}`);


dato = parseInt("100");
console.log(`${dato}`);

dato = parseInt("100.20");
console.log(`${dato}`);

dato = parseFloat("100.20");
console.log(`${dato}`);


// usemos fix

let numero6 = "21321321.14561654779846846";
let numero7 = 1365132168135.3546846846541;


//solo si el numero es numero y no texto
//console.log(numero6.tofixed());


console.log(Number(numero6).toFixed(4));
console.log(parseFloat(numero6).toFixed(4));

console.log(numero7.toFixed(5));