const nombre = "juan";

console.log(typeof `${nombre}`);

//numeros
const edad = 80;
console.log(typeof `${edad}`);

const edadS = 80.80;
console.log(typeof(edadS));

const edadT = 80.80;
console.log(typeof(edadT));


// booleanos

let aprendiendoJS = false;
console.log(typeof aprendiendoJS);

//

let valor;
console.log(typeof valor);

valor = "Hola";
console.log(typeof valor);

valor = true;
console.log(typeof valor);

valor = 20;
console.log(typeof valor);

valor = "20";
console.log(typeof valor);


//tipos nulos

let hijos = null;
console.log(typeof hijos);

let apellido;
console.log(typeof apellido);

//objetos

let lenguaje = ['HTMl', 'Js', 'PHP'];
console.log(typeof lenguaje);
console.log(typeof `${lenguaje}`);

//objetos

let persona = {
    nombre: 'Juan',
    ciudad: 'Buenos Aires'
}

console.log(typeof persona);

//fechas
let fecha = new Date();
console.log(typeof fecha);