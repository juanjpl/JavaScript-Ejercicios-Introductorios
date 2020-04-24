//arreglos

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);

console.table(numeros);

//posiciones dentro del array--- comienza en 0

const meses = new Array('enero', 'febrero', 'marzo');
console.log(meses);

console.log(meses[2]);

console.log(meses[5]);


//el arreglo puede estar compuesto por cualquier dato
const arreglo = ['Hola', 10, true, 'si', null, undefined];

console.log(arreglo);
console.table(arreglo);
console.log(arreglo.length);

//verificamos si es un array
console.log(Array.isArray(arreglo));

//manejamos arreglos
meses[3] = 'Abril';
console.log(meses);


//agrega al final del arreglo
meses.push('mayo');
console.log(meses);

//elimina el primero del arreglo
meses.shift();
console.log(meses);


//agrega al inicio del arreglo
meses.unshift('Mes 0');
console.log(meses);

//eliminamos el ultimo
meses.pop();
console.log(meses);

//eliminar desde un rango del arreglo
meses.splice(0, 1);
console.log(meses);

meses.reverse();
console.log(meses);

let frutas = ['platano', 'manzana', 'fresa', 'naranja'];
frutas.sort();

console.log(frutas);